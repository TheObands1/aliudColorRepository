import React, { useState, useEffect, Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Routes from './screens/routes'


export default function App(){

  const [isAppFontLoaded, setIsAppFontLoaded] = useState(false);

  useEffect(() => {
    loadFont();
  }, []);

  async function loadFont() {
    try{
        await Font.loadAsync({
          'dogbyte': require('./assets/fonts/dogbyte.otf'),
        });
        setIsAppFontLoaded(true);
      }
      catch(error)
      {
        console.log("Font could not be loaded properly")
      }
  }

  if(isAppFontLoaded) {
    return (<Fragment>
              <StatusBar barStyle="light-content" />
              <Routes />
            </Fragment>
      );
  } else {
    return (<AppLoading />);
  }
}

