/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import  { StackNavigator } from 'react-navigation';
import ErrorCodeScreen from './screens/ErrorCodeScreen';
import PossibleErrorsScreen from './screens/PossibleErrorsScreen';
import TroubleshootingScreen from './screens/TroubleshootingScreen';
import StartScreen from './screens/StartScreen';
import ErrorDiagnosisScreen from './screens/ErrorDiagnosisScreen';
import TypeListScreen from './screens/TypeListScreen';
import ErrorSearchScreen from './screens/ErrorSearchScreen';
import WebViewScreen from './screens/WebViewScreen';

export default class App extends Component{

  render() {
    return (
      <RootStack />
    );
  }
}


const RootStack = StackNavigator(
  {

    Start: {
      screen: StartScreen
    },
    Error: {
      screen: ErrorCodeScreen,
    },
    PossibleErrors: {
      screen: PossibleErrorsScreen,
    },
    Troubleshooting: {
      screen: TroubleshootingScreen
    },
    ErrorDiagnosis: {
      screen: ErrorDiagnosisScreen
    },
    TypeList: {
      screen: TypeListScreen
    },
    ErrorSearch: {
      screen: ErrorSearchScreen
    },
    WebView: {
      screen: WebViewScreen
    }

  },
  {
    initialRouteName: 'Start'
  }
);
