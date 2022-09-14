import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigation } from './navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <RootNavigation />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;