import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main, ShowDetailView } from '../screen';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main' >
        <Stack.Screen
          name="Main"
          component={Main}
        />
        <Stack.Screen name="ShowDetailView" component={ShowDetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
