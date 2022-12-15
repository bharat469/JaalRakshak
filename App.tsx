/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import RootNavigator from './src/navigation/rootNavigator';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;
