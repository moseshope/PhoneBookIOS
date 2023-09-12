# Phone book 🚀


meiwaku-denwa.club

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
