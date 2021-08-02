import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const StackHomeNavigator = createStackNavigator();

const MockedMainMenuNavigator = ({component, params = {}}) => {

  return (<NavigationContainer>
            <StackHomeNavigator.Navigator>
                <StackHomeNavigator.Screen
                  name="MockedMainMenu"
                  component={component}
                  initialParams={params}
                />
              </StackHomeNavigator.Navigator>
          </NavigationContainer>);
}
export default MockedMainMenuNavigator;