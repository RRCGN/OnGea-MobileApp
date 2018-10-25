# OnGea App

> OnGea App for iOS and Android

## Prerequisites

- `node`
- `yarn`
- `react-native-cli`
- Android Studio and Xcode according to react-native docs

## Development Setup

```sh
yarn install
cp .env.example .env
# then fill out the keys inside .env

yarn run i18n:compile

react-native run-ios # start ios simulator
react-native run-android # run app on android emulator
```

### i18n

We use linguijs for translation. When adding new strings, run `yarn run i18n:extract`.

## Build a release

Follow these steps before building a release:

0. `cp .env.build.example .env.build`
1. Fill out the keystore passwords inside `.env.build`
2. `cp .env .env.production` (check if you need to change the credentials)
3. Put `ongea-release-key.keystore` into `android/app`
4. Bump the version number: `npm version [patch|minor|major]`

### Build a release for iOS with CLI

```
yarn run build:ios
```

### Build a release for iOS with Xcode

0. `yarn run i18n:compile`
1. Start Xcode and open the project
2. Select "Generic iOS Device" as target
3. Product > Archive

### Build a release for Android

```
yarn run build:android
```
