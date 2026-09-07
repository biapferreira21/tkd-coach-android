plugins { id("com.android.application") }

android {
    namespace = "com.tkdcoach.mobile"
    compileSdk = 37

    defaultConfig {
        applicationId = "app.alphavote.tkdcoach"
        minSdk = 24
        targetSdk = 35
        versionCode = 10068
        versionName = "63.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}
