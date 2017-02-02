/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { TabNavigator } from 'react-navigation'

const OnGeaApp = TabNavigator({
  Web: {
    screen: WebAppScreen
  },
  Dashboard: {
    screen: DashboardScreen
  }
})

AppRegistry.registerComponent('OnGeaApp', () => OnGeaApp);
