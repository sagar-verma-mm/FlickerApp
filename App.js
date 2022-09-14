/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import { useState } from 'react';
 import {
   StatusBar,
   Text,
   Button,
   StyleSheet,
 } from 'react-native';
 import RTNCalculator from 'rtn-calculator/js/NativeCalculator.ts';
 import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';
 import { SafeAreaProvider } from 'react-native-safe-area-context';
 import { RootNavigation } from '../MyApp/source/navigation';

 const App = () => {
   const [result, setResult] = useState<number | null>(null);
   return (
      <SafeAreaProvider>
       <StatusBar barStyle={'dark-content'} />
       <Text style={{ marginLeft: 20, marginTop: 20 }}>
         3+7={result ?? '??'}
       </Text>
       <Button
         title="Compute"
         onPress={async () => {
           const value = await RTNCalculator.add(3, 7);
           setResult(value);
         }}
       />
       <RTNCenteredText
      text="Hello World!"
      style={styles.text}
    />
      <RootNavigation />
    </SafeAreaProvider>
   );
 };
 export default App;

 const styles = StyleSheet.create({
  text: { 
    width: '100%',
    height: 70, 
    // alignSelf: 'center', 
    // textAlign: 'center', 
    backgroundColor: '#555',

  }
 })