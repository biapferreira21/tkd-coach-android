package com.tkdcoach.mobile;

import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.graphics.Color;
import android.graphics.Insets;
import android.view.ViewGroup;
import android.view.WindowInsets;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.view.WindowManager;
import android.widget.FrameLayout;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Locale;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;
import org.json.JSONObject;

public class MainActivity extends Activity {
    private WebView webView;
    private TextToSpeech tts;
    private MediaPlayer elevenPlayer;
    private SharedPreferences preferences;
    private final ExecutorService network = Executors.newSingleThreadExecutor();
    private final AtomicInteger voiceRequest = new AtomicInteger();
    private volatile boolean trainingActive = false;

    @Override public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        preferences = getSharedPreferences("tkd-coach-secure", MODE_PRIVATE);
        tts = new TextToSpeech(this, status -> {
            if (status == TextToSpeech.SUCCESS) {
                int result = tts.setLanguage(new Locale("pt", "PT"));
                if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) tts.setLanguage(new Locale("pt", "BR"));
                tts.setSpeechRate(0.94f); tts.setPitch(0.92f);
            }
        });
        webView = new WebView(this);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true); settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true); settings.setAllowContentAccess(true);
        settings.setMediaPlaybackRequiresUserGesture(false); settings.setBuiltInZoomControls(false); settings.setDisplayZoomControls(false);
        webView.setOverScrollMode(WebView.OVER_SCROLL_NEVER);
        webView.addJavascriptInterface(new VoiceBridge(), "AndroidVoice");
        webView.addJavascriptInterface(new NavigationBridge(), "AndroidNavigation");
        webView.setWebViewClient(new WebViewClient() {
            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl(); if ("file".equals(uri.getScheme())) return false;
                startActivity(new Intent(Intent.ACTION_VIEW, uri)); return true;
            }
        });
        FrameLayout safeRoot = new FrameLayout(this);
        safeRoot.setBackgroundColor(Color.rgb(29, 24, 65));
        safeRoot.addView(webView, new FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.MATCH_PARENT
        ));
        setContentView(safeRoot);
        applySystemBarInsets(safeRoot);
        webView.loadUrl("file:///android_asset/www/index.html");
    }

    private void applySystemBarInsets(FrameLayout root) {
        getWindow().setStatusBarColor(Color.rgb(29, 24, 65));
        getWindow().setNavigationBarColor(Color.rgb(29, 24, 65));
        root.setOnApplyWindowInsetsListener((view, windowInsets) -> {
            int left;
            int top;
            int right;
            int bottom;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                Insets bars = windowInsets.getInsets(WindowInsets.Type.systemBars());
                left = bars.left;
                top = bars.top;
                right = bars.right;
                bottom = bars.bottom;
            } else {
                left = windowInsets.getSystemWindowInsetLeft();
                top = windowInsets.getSystemWindowInsetTop();
                right = windowInsets.getSystemWindowInsetRight();
                bottom = windowInsets.getSystemWindowInsetBottom();
            }
            FrameLayout.LayoutParams layout = (FrameLayout.LayoutParams) webView.getLayoutParams();
            if (layout.leftMargin != left || layout.topMargin != top ||
                layout.rightMargin != right || layout.bottomMargin != bottom) {
                layout.setMargins(left, top, right, bottom);
                webView.setLayoutParams(layout);
            }
            return windowInsets;
        });
        root.requestApplyInsets();
    }

    private byte[] readAll(InputStream input) throws Exception {
        ByteArrayOutputStream output = new ByteArrayOutputStream(); byte[] buffer = new byte[16384]; int count;
        while ((count = input.read(buffer)) != -1) output.write(buffer, 0, count);
        return output.toByteArray();
    }
    private String apiKey() { return preferences.getString("elevenlabs-api-key", ""); }
    private void status(String message, boolean ok) {
        if (webView == null) return;
        String script = "window.__androidElevenStatus(" + JSONObject.quote(message) + "," + ok + ")";
        runOnUiThread(() -> webView.evaluateJavascript(script, null));
    }
    private void stopAudio() {
        voiceRequest.incrementAndGet();
        runOnUiThread(() -> {
            if (elevenPlayer != null) { try { elevenPlayer.stop(); } catch (Exception ignored) {} elevenPlayer.release(); elevenPlayer = null; }
            if (tts != null) tts.stop();
        });
    }
    private void speakAndroid(String text) { runOnUiThread(() -> { if (tts != null && text != null) tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "tkd-coach"); }); }

    private String errorJson(String message) { JSONObject object = new JSONObject(); try { object.put("error", message); } catch (Exception ignored) {} return object.toString(); }

    public final class NavigationBridge {
        @JavascriptInterface public void setTrainingActive(boolean active) {
            trainingActive = active;
            runOnUiThread(() -> {
                if (active) getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                else getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            });
        }
    }

    public final class VoiceBridge {
        @JavascriptInterface public void speak(String text) { stopAudio(); speakAndroid(text); }
        @JavascriptInterface public void stop() { stopAudio(); }
        @JavascriptInterface public boolean hasElevenApiKey() { return !apiKey().trim().isEmpty(); }
        @JavascriptInterface public void setElevenApiKey(String key) {
            if (key != null && key.trim().length() >= 10) preferences.edit().putString("elevenlabs-api-key", key.trim()).apply();
        }
        @JavascriptInterface public String listElevenVoices() {
            if (!hasElevenApiKey()) return errorJson("Introduz a chave ElevenLabs.");
            HttpURLConnection connection = null;
            try {
                connection = (HttpURLConnection) new URL("https://api.elevenlabs.io/v2/voices?page_size=100&include_total_count=false").openConnection();
                connection.setConnectTimeout(15000); connection.setReadTimeout(20000); connection.setRequestProperty("xi-api-key", apiKey()); connection.setRequestProperty("Accept", "application/json");
                int code = connection.getResponseCode(); InputStream stream = code >= 200 && code < 300 ? connection.getInputStream() : connection.getErrorStream();
                String body = new String(readAll(stream), StandardCharsets.UTF_8);
                if (code < 200 || code >= 300) return errorJson("ElevenLabs recusou a chave: " + code);
                return body;
            } catch (Exception error) { return errorJson("Falha de ligação: " + error.getMessage()); }
            finally { if (connection != null) connection.disconnect(); }
        }
        @JavascriptInterface public void speakEleven(String text, String voiceId) {
            if (text == null || text.trim().isEmpty() || voiceId == null || voiceId.trim().isEmpty()) { speakAndroid(text); return; }
            final int request = voiceRequest.incrementAndGet();
            network.execute(() -> {
                HttpURLConnection connection = null; File audioFile = null;
                try {
                    JSONObject settings = new JSONObject().put("stability", 0.58).put("similarity_boost", 0.78).put("style", 0.18).put("use_speaker_boost", true);
                    JSONObject payload = new JSONObject().put("text", text).put("model_id", "eleven_multilingual_v2").put("voice_settings", settings);
                    URL endpoint = new URL("https://api.elevenlabs.io/v1/text-to-speech/" + Uri.encode(voiceId) + "?output_format=mp3_44100_128");
                    connection = (HttpURLConnection) endpoint.openConnection(); connection.setConnectTimeout(15000); connection.setReadTimeout(45000);
                    connection.setRequestMethod("POST"); connection.setDoOutput(true); connection.setRequestProperty("xi-api-key", apiKey()); connection.setRequestProperty("Content-Type", "application/json"); connection.setRequestProperty("Accept", "audio/mpeg");
                    byte[] requestBody = payload.toString().getBytes(StandardCharsets.UTF_8); try (OutputStream out = connection.getOutputStream()) { out.write(requestBody); }
                    int code = connection.getResponseCode(); if (code < 200 || code >= 300) throw new Exception("resposta " + code);
                    byte[] audio = readAll(connection.getInputStream()); if (request != voiceRequest.get()) return;
                    audioFile = File.createTempFile("tkd-eleven-", ".mp3", getCacheDir()); try (FileOutputStream out = new FileOutputStream(audioFile)) { out.write(audio); }
                    MediaPlayer prepared = new MediaPlayer(); prepared.setDataSource(audioFile.getAbsolutePath()); prepared.prepare(); File finalFile = audioFile;
                    runOnUiThread(() -> {
                        if (request != voiceRequest.get()) { prepared.release(); finalFile.delete(); return; }
                        if (elevenPlayer != null) { try { elevenPlayer.stop(); } catch (Exception ignored) {} elevenPlayer.release(); }
                        elevenPlayer = prepared; elevenPlayer.setOnCompletionListener(player -> { player.release(); if (elevenPlayer == player) elevenPlayer = null; finalFile.delete(); }); elevenPlayer.start(); status("Instrutor ElevenLabs ativo.", true);
                    });
                } catch (Exception error) { status("Falha na ElevenLabs; usada voz Android.", false); speakAndroid(text); if (audioFile != null) audioFile.delete(); }
                finally { if (connection != null) connection.disconnect(); }
            });
        }
    }

    @Override public void onBackPressed() {
        stopAudio();
        if (webView == null) {
            super.onBackPressed();
            return;
        }
        webView.evaluateJavascript(
            "String(Boolean(window.__tkdHandleBack && window.__tkdHandleBack()))",
            result -> {
                boolean handled = "\"true\"".equals(result) || "true".equals(result);
                if (!handled) performNativeBack();
            }
        );
    }
    private void performNativeBack() {
        if (webView != null && webView.canGoBack()) webView.goBack(); else super.onBackPressed();
    }
    @Override protected void onDestroy() { stopAudio(); network.shutdownNow(); if (tts != null) { tts.stop(); tts.shutdown(); } if (webView != null) webView.destroy(); super.onDestroy(); }
}
