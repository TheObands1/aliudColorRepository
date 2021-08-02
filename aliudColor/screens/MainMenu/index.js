import React, { useState, useEffect}  from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuStyle from './styles'
import { GameTitle } from '../../components';
import * as SQLite from 'expo-sqlite';
import { useFocusEffect } from '@react-navigation/native';

export default function MainMenuView({ navigation }) {

  const [currentMaxPoints, setCurrentMaxPoints] = useState(0);
  const [isAccesibilityModeOn, setIsAccesibilityModeOn] = useState(false);
  const gameDatabase = SQLite.openDatabase("gameDatabase")
  
  function createDBTable(){
    gameDatabase.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Scores (id INTEGER PRIMARY KEY AUTOINCREMENT, Score INT)'
      )
    })
    fetchData();
  }
  const fetchData = () => {
    gameDatabase.transaction(tx => {
      tx.executeSql('SELECT * FROM Scores', null, // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows: { _array } }) => console.log("fetching data successful"),
        // failure callback which sends two things Transaction object and Error
        (txObj, error) => console.log('Error ', error)
        ) // end executeSQL
    }) // end transaction
  }

  function getCurrentMaxPoints(){
    gameDatabase.transaction(tx => {
      tx.executeSql('SELECT MAX(Score) FROM Scores', null, // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows: { _array } }) => setCurrentMaxPoints(_array[0]["MAX(Score)"]), 
        // failure callback which sends two things Transaction object and Error
        (txObj, error) => console.log('This Error ', error)
        ) // end executeSQL
    }) // end transaction
}

  useEffect(() => {
    createDBTable();
    getCurrentMaxPoints();
 }, [])

 useFocusEffect(
  React.useCallback(() => {
    // Set MaxPoints when screen is focused
    getCurrentMaxPoints();
    return () => {
    };
  }, [])
);

  function onPressPlayButton() {
    navigation.navigate('GameScreen', {isAccesibilityModeOn: isAccesibilityModeOn})
  };

  function onPressInstructionsButton() {
    navigation.navigate('Instructions')
  }

  function onPressAccesibilityButton() {
    if(isAccesibilityModeOn)
    {
        setIsAccesibilityModeOn(false);
    }
    else
    {
      setIsAccesibilityModeOn(true);
    }
  }

  function changeAccesibilityIcon(){
    if(isAccesibilityModeOn)
    {
      return require("../../assets/icons/OnButton.png");
    }
    else
    {
      return require("../../assets/icons/OffButton.png");
    }
  }

  return (<View style={MainMenuStyle.generalStyle}>
            <GameTitle/>

            {/*Play Button*/}
            <TouchableOpacity onPress={onPressPlayButton} style={MainMenuStyle.playButtonArea} accessibilityLabel="Play Button"  accessibilityHint="Press to play the game">
              <Image source={require("../../assets/icons/play_arrow.png")} style={MainMenuStyle.playIcon}/>
              <Text style={MainMenuStyle.playText}>play!</Text>
            </TouchableOpacity>

            {/*HighScore*/}
            <View style={MainMenuStyle.highScoreArea} accessibilityLabel={"High-Score: " + currentMaxPoints }>
              <Image source={require("../../assets/icons/trophy.png")} style={MainMenuStyle.highScoreIcon}/>
              <Text style={MainMenuStyle.highScoreText}>high-score: {currentMaxPoints}</Text>
            </View>

             {/*Instructions*/}
            <TouchableOpacity onPress={onPressInstructionsButton} style={MainMenuStyle.instructionsArea}  accessibilityLabel= "Instructions Button" accessibilityHint="Press to go to the instructions page">
              <Text style={MainMenuStyle.instructionsIcon}>i</Text>
              <Text style={MainMenuStyle.instructionsText}>instructions</Text>
            </TouchableOpacity>

            {/*Accesibility Mode*/}
            <TouchableOpacity onPress={onPressAccesibilityButton} style={MainMenuStyle.accessibilityArea}  accessibilityLabel= "Accessibility Button" accessibilityHint={isAccesibilityModeOn ? "Press to toggle accesibility mode off" : "Press to toggle accesibility mode on"}>
              <Text style={MainMenuStyle.accessibilityText}>accessibility mode: </Text>
              <Image source={changeAccesibilityIcon()} style={MainMenuStyle.accessibilityIcon}/>
            </TouchableOpacity>

            {/*Copyright & Sound*/}
             <View style={MainMenuStyle.bottomArea}>
              <View style = {MainMenuStyle.copyrightArea}>
                <Text style={[MainMenuStyle.copyrightText, { color: "#3998DB" }]}>based on "colorblinder" by Daniel Gergely</Text>
              </View>
             </View>

          </View>
  );
}

