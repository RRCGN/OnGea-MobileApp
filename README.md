# OnGea App
OnGea App for iOS and Android

## Dependencies

- `react-native`

## Development

- Install dependencies: `$ yarn install`

- Copy `.env.example` to `.env` with credentials.

- With the packager is running `$ yarn start` do following:

  - iOS: `$ react-native run-ios` (will start the iOS Simulator)
  - Android: `$ react-native run-android` (need a virtual or connected device)


You may face some issues when building for Android, check :point_down: [Known issues and its hacks](#known-issues-and-its-hacks)

## Production:

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

:see_no_evil:

### Stores Credentials

#### Android
The following steps are needed to be able to build for production and deploy it:

- Copy `.env.example` to `.env.production` with correct credentials.

- Copy `ongea-release-key.keystore` into `/android/app/`  
  **Connect** Ongea product owner or amed@railslove.com for credentials and `release-key`.

- copy `google.play.credentials.json.example` -> `google.play.credentials.json` with the correct credentials.
  **check** this link to get previous file: [#collect-your-google-credentials](https://docs.fastlane.tools/getting-started/android/setup/#collect-your-google-credentials)

#### iOS

:see_no_evil:

## TODOs

See https://github.com/railslove/ongea-app/projects/2

## ENV Files
For production builld, you need `.env.production` and for development it's `.env`

## Known issues and its hacks

### react-native-maps
`react-native-maps` has `compileOnly()` issue on android build, since it uses [docs.gradle.org/3.0/release-notes](https://docs.gradle.org/3.0/release-notes.html) and the app gradle is version 2.

You can skip this issue by implementing `build.gradle` of the `modules`, check [react-native-maps#2188#issuecomment-385420099](https://github.com/react-community/react-native-maps/issues/2188#issuecomment-385420099)

**Da Hack:**
run `$ yarn run react-native-maps-fix` at the root of project.


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
