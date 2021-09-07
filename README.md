# Phone book 🚀


meiwaku-denwa.club
みんなで作る電話帳
このサイトはみんなで作る電話帳です。しつこい勧誘や振込詐欺などの迷惑電話の情報共有を目的としています。迷惑電話だけでなく、かけ直しが必要な情報（支払遅延の催促電話など）もあります。安全な番号には安心して折り返しできるように、お気軽にクチコミ投稿をお願いします。


## Getting Started

#### 1. Clone and Install

```bash
cd phonebook && yarn install

# Install Pods
cd ios && pod install
```

#### 2. Open RNS in your iOS simulator

Run this command to start the development server and to start your app on iOS simulator:
```
yarn run:ios
```

Or, if you prefer Android:
```
yarn run:android
```

That's it! Cool, right?

#### 3. Release apk for Android
```
cd android
gradlew assembleRelease
```

or, you can relaese in Android Studio
#### - Open the 'phonebook' project
#### - "Build/Generate Signed Bundle/APK..." of toolbar
#### -Select 'APK' and click the 'next' button 
#### -input Keystore path and password and  click the 'next' button
#### -Select 'releas' of Build Variants item and check the 'V2(Full APK Signature) and then click the 'finish' button.

You can find the 'app-release.apk' on android/app/release folder.
