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
yarn run i18n:compile

react-native run-ios # start ios simulator
react-native run-android # run app on android emulator
```

### i18n

We use linguijs for translation. When adding new strings, run `yarn run i18n:extract`.

## Build a release

Before building a new release for rollout, bump the version:

```
npm version [patch|minor|major]
```

### Build a release for iOS with CLI

```
yarn run build:ios
```

### Build a release for iOS with Xcode

First compile the translations:

```
yarn run i18n:compile
```

1. Start Xcode and open the project
2. Select "Generic iOS Device" as target
3. Product > Archive



## Production:

Before you make a release, run `yarn run i18n:compile`. This will compile the translations for i18n-support.

### Deploy

In order to deploy the app for public, there is need to post (bump - incrument) the app version, build and then deploy to distribution services (Google Play or App Store).
:point_up_2: This stage comes after setting the correct credentials. Check [Stores Credentials Setup](#stores-credentials-setup)

### Post Version
to Bump (incrument) version number (both Android & iOS) run:  
`$ yarn postversion`

### Deploy

#### Android

To deply to Play Store, run `$ run fastlane deploy` inside `android/`.
You may need to review and roll the version out manually after deployment.



You need to commit changes to git also adding a tag for the commit (since it is a new version).

- `$ git commit -m "version X"`  

- Create `tag` and push it to repository:

  `$ git tag vX` - you can use `-a` flag to add tag description
  `$ git push --tags` (`$ git push` before)

#### iOS

- After copying `fastlane` credentials for the first time (check Stores Credentials),   
you need to change the version number (check Post Version)
then run `$ fastlane deploy` at `ios/` to deply it to the store.  
The app is signign and pushing to `AppStoreConnect`, please check your iOS developemnt certificates.

### Stores Credentials

#### Android
The following steps are needed to be able to build for production and deploy it:

- Copy `.env.example` to `.env.production` with correct credentials.

- Copy `ongea-release-key.keystore` into `/android/app/`  
  **Connect** Ongea product owner or amed@railslove.com for credentials and `release-key`.

- copy `google.play.credentials.json.example` -> `google.play.credentials.json` with the correct credentials.
  **check** this link to get previous file: [#collect-your-google-credentials](https://docs.fastlane.tools/getting-started/android/setup/#collect-your-google-credentials)

#### iOS

- Copy `ios/fastlane/Appfile.example` to `ios/fastlane/Appfile` with the correct details.

:see_no_evil:

## TODOs

See https://github.com/railslove/ongea-app/projects/2

## ENV Files
For production builld, you need `.env.production` and for development it's `.env`

## Known issues and its hacks

:phone:

## App Code

Everything for our app is located in `/src`.

- **`app/RootView.js`**  
  Main entry point
- **`app/components`**  
  Reusable Components
- **`app/navigators`**  
  Navigators from [react-navigation](http://reactnavigation.org/)
- **`app/services`**  
  Data Handling (Requests, Stores, ...)
- **`app/utils`**  
  Utilities, Constants, ...
- **`app/views`**  
  All single Screens, which are embedded in the navigators
### Mapbox

Check [mapbox.com/account](https://www.mapbox.com/account/) to get `MAPBOX_ACCESS_TOKEN`

### Storybook

This app is built with [storybook](https://github.com/storybooks/react-storybook). Configs are in `/storybook`.

Run `npm run storybook` to start Storybook.

### Storyshots

Snapshots of React Components are auto-generated with [storyshots](https://github.com/storybooks/storyshots).

## Mock Server

`/mockserver` consists of a JSON Server.

- Start with token-based auth via `npm run server`.
- Start without token-based auth via `npm run server:no-auth`.

**Token-based auth:**  
1. Obtain a token from `/auth?username=test&password=test`.
2. Use this token in your requests, like `/all?token=xxx`.
