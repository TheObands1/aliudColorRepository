import React from 'react'
import MainMenu from './MainMenu/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const StackHomeNavigator = createStackNavigator();

 export default function App() {

  return (<NavigationContainer>
            <StackHomeNavigator.Navigator initialRouteName="MainMenuRoutName" headerMode="none">
                <StackHomeNavigator.Screen
                  name="MainMenu"
                  component={MainMenu}
                />
              </StackHomeNavigator.Navigator>
          </NavigationContainer>);
}