# OnGea App

OnGea Apps for iOS and Android, written in react-native.

## Dependencies

- react-native

## Installation

1. Install dependencies: `yarn install`
2. Link native dependencies: `react-native link`

## Run

- `react-native run-ios` for iOS (will start the iOS Simulator)
- `react-native run-android` for Android (need a virtual or connected device)

## App Code

Everything for our app is located in `/app`.

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
