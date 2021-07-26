import React, { useState, useEffect}  from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuStyle from './styles'
import { GameTitle } from '../../components';
//import SQLite from 'react-native-sqlite-storage'
import * as SQLite from 'expo-sqlite';
import { useFocusEffect } from '@react-navigation/native';

export default function MainMenuView({ navigation }) {

  const [isSoundOn, setIsSoundOn] = useState(true);
  const [currentMaxPoints, setCurrentMaxPoints] = useState(0);
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
      // sending 4 arguments in executeSql
      tx.executeSql('SELECT * FROM Scores', null, // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows: { _array } }) => console.log("fetching data successfull"),
        // failure callback which sends two things Transaction object and Error
        (txObj, error) => console.log('Error ', error)
        ) // end executeSQL
    }) // end transaction
  }

  useEffect(() => {
    createDBTable();
    getCurrentMaxPoints();
    getCurrentMaxPoints();
 }, [])

 useFocusEffect(
  React.useCallback(() => {
    // Set MaxPoints when screen is focused
    getCurrentMaxPoints();
    return () => {
      //Do something when the screen is unfocused
    };
  }, [])
);

  function onPressPlayButton() {
    navigation.navigate('GameScreen')
  };

  function onPressLeaderboardButton() {
    console.log("onPressLeaderboardButton event handler");
  };

  function changeSoundIcon(){
    if(isSoundOn)
    {
       return require("../../assets/icons/speaker-on.png")
    }
    else{
      return require("../../assets/icons/speaker-off.png")
    }
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

  function onToggleSound() {
    if(isSoundOn)
    {
      setIsSoundOn(false);
      console.log("onToggleSound is false");
    }
    else{
      setIsSoundOn(true);
      console.log("onToggleSound is true");
    }

  };


  return (<View style={MainMenuStyle.generalStyle}>
            <GameTitle/>

            {/*Play Button*/}
            <TouchableOpacity onPress={onPressPlayButton} style={MainMenuStyle.playButtonArea}>
              <Image source={require("../../assets/icons/play_arrow.png")} style={MainMenuStyle.playIcon}/>
              <Text style={MainMenuStyle.playText}>play!</Text>
            </TouchableOpacity>

            {/*HighScore*/}
            <View style={MainMenuStyle.highScoreArea}>
              <Image source={require("../../assets/icons/trophy.png")} style={MainMenuStyle.highScoreIcon}/>
              <Text style={MainMenuStyle.highScoreText}>high-score: {currentMaxPoints}</Text>
            </View>

             {/*LeaderBoard*/}
            <TouchableOpacity onPress={onPressLeaderboardButton} style={MainMenuStyle.leaderboardArea}>
              <Image source={require("../../assets/icons/leaderboard.png")} style={MainMenuStyle.leaderboardIcon}/>
              <Text style={MainMenuStyle.leaderboardText}>leaderboard</Text>
            </TouchableOpacity>

            {/*Copyright & Sound*/}
             <View style={MainMenuStyle.bottomArea}>
              <View style = {MainMenuStyle.copyrightArea}>
                <Text style={[MainMenuStyle.copyrightText, { color: "#F1C431" }]}>sound effects by:</Text>
                <Text style={[MainMenuStyle.copyrightText, { color: "#68CC73" }]}>music by:</Text>
                <Text style={[MainMenuStyle.copyrightText, { color: "#3998DB" }]}>Based on "colorblinder" by Daniel Gergely</Text>
              </View>
              <TouchableOpacity onPress={onToggleSound}>
                  <Image source={changeSoundIcon()} style={MainMenuStyle.soundIcon} />
              </TouchableOpacity>
             </View>

          </View>
  );
}

