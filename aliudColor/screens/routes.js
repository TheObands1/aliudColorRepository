import React from 'react'
import MainMenu from './MainMenu/index';
import GameScreen from './GameScreen/index'
import Instructions from './Instructions/index'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const StackHomeNavigator = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <StackHomeNavigator.Navigator initialRouteName="MainMenu" headerMode="none">
      <StackHomeNavigator.Screen
        name="MainMenu"
        component={MainMenu}
      />
      <StackHomeNavigator.Screen
        name="GameScreen"
        component={GameScreen}
        initialParams={{ isAccesibilityModeOn: false }}
      />
      <StackHomeNavigator.Screen
        name="Instructions"
        component={Instructions}
      />
    </StackHomeNavigator.Navigator>
  </NavigationContainer>);
      
export default App