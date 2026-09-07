# TKD Coach

Aplicação Android de treino de Taekwondo que combina sessões guiadas, criação livre de workouts, um catálogo visual de exercícios e Poomsae passo a passo numa experiência concebida para funcionar durante o treino.

<p align="center">
  <img src="app/src/main/assets/www/icon-512.png" width="160" alt="Logótipo TKD Coach" />
</p>

## O problema que resolve

Planear um treino variado implica normalmente consultar várias listas, temporizadores, fotografias e vídeos. A TKD Coach reúne essas peças numa única aplicação: escolhe-se ou constrói-se uma sessão, define-se a ordem e os tempos e o telemóvel acompanha todo o treino sem exigir navegação constante.

## Principais funcionalidades

- 13 treinos completos já preparados
- Treinos personalizados sem limite artificial de exercícios
- Nomeação, edição, eliminação e repetição de treinos guardados
- Duração individual configurável para cada exercício
- Descansos inseridos entre exercícios
- Loops de grupos de exercícios com número de repetições definido pela utilizadora
- Reordenação manual e opção **Baralhar** apenas para a sessão atual
- Taegeuk 1–8 e Koryo passo a passo
- Catálogo com Taekwondo, Poomsae, boxe, kickboxing, cardio, força, alongamentos e pesos livres
- Fotografias e miniaturas incorporadas para consulta offline
- Temporizador por exercício, posição atual e tempo total restante
- Modo de sessão concentrado no nome, tempo e imagem
- Ecrã mantido ativo durante o workout
- Voz Android local e integração opcional com ElevenLabs
- Histórico e progresso guardados no dispositivo

## Poomsae

As formas são apresentadas golpe a golpe, com a ordem didática completa:

| Forma | Etapas didáticas |
| --- | ---: |
| Taegeuk Il Jang | 20 |
| Taegeuk I Jang | 23 |
| Taegeuk Sam Jang | 34 |
| Taegeuk Sa Jang | 31 |
| Taegeuk Oh Jang | 32 |
| Taegeuk Yuk Jang | 29 |
| Taegeuk Chil Jang | 33 |
| Taegeuk Pal Jang | 38 |

As oito Taegeuk totalizam 240 etapas didáticas. A Koryo está disponível como sequência adicional.

## Arquitetura

| Camada | Implementação |
| --- | --- |
| Aplicação Android | Java e Android WebView |
| Interface | HTML semântico, CSS e JavaScript |
| Dados do treino | Estruturas JavaScript e JSON incorporadas |
| Persistência | Armazenamento local no dispositivo |
| Voz local | Android Text-to-Speech |
| Voz premium | ElevenLabs, configurada opcionalmente pela utilizadora |
| Conteúdo offline | Assets incluídos dentro da APK |

```text
app/src/main/
  java/com/tkdcoach/mobile/MainActivity.java   Ponte Android, voz e ciclo de vida
  assets/www/index.html                        Estrutura da interface
  assets/www/app.js                            Treinos, editor e sessão ativa
  assets/www/styles.css                        Design responsivo
  assets/www/poomsae-sequences.js              Sequências das formas
  assets/www/weights-v53.js                     Catálogo de pesos livres
  assets/www/assets/                            Fotografias, arte e ícones
  res/                                          Tema e ícone Android
```

## Executar no Android Studio

Requisitos:

- Android Studio
- Java 17
- Android SDK compatível com `compileSdk 37`

Passos:

1. Clonar o repositório.
2. Abrir a pasta raiz no Android Studio.
3. Aguardar a sincronização do Gradle.
4. Ligar um dispositivo Android ou iniciar um emulador.
5. Executar o módulo `app`.

## Gerar uma APK de teste

No Android Studio, selecionar **Build → Build APK(s)**. O resultado de debug fica normalmente em:

```text
app/build/outputs/apk/debug/app-debug.apk
```

Uma versão destinada à Google Play deve ser gerada como Android App Bundle e assinada com uma chave de lançamento privada. Keystores, passwords, APKs e AABs estão excluídos pelo `.gitignore`.

## ElevenLabs e privacidade

A chave ElevenLabs não está incluída no código nem no repositório. É introduzida dentro da aplicação e guardada localmente no dispositivo. O código publicado contém apenas a integração necessária para enviar texto à API quando essa funcionalidade é ativada.

Os treinos personalizados, o histórico, as preferências e o progresso também permanecem no dispositivo nesta versão.

## Fotografias e atribuições

O projeto inclui recursos próprios e imagens externas com proveniência registada nos manifestos e relatórios de validação. Antes de redistribuição comercial ou publicação numa loja, devem ser revistas as condições da página original de cada recurso e mantidas as atribuições exigidas.

## Segurança do repositório

O histórico público não inclui:

- chaves ElevenLabs;
- passwords de assinatura;
- keystores;
- configuração local do Android SDK;
- APKs ou Android App Bundles gerados.

## Autoria

Produto idealizado e dirigido por **Beatriz Pereira Ferreira**, com Codex utilizado como parceiro de implementação, pesquisa de recursos, testes e documentação.
