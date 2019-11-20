/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/screens/Home';

import { storesContext } from './src/stores';

const App: () => React$Node = () => {
  return (
    <storesContext.Provider value={'test'}>
      <StatusBar barStyle="dark-content" />
      <Home />
    </storesContext.Provider>
  );
};

export default App;
