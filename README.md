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

## Production:

## TODOs

See https://github.com/railslove/ongea-app/projects/2

## App Code

Everything for our app is located in `/src`.

- **`app/OnGeaApp.js`**  
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
