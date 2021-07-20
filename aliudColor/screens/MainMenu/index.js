import React, { useState, useEffect}  from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuStyle from './styles'
import { GameTitle } from '../../components';

export default function MainMenuView({ navigation }) {

  const [isSoundOn, setIsSoundOn] = useState(true);

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
              <Text style={MainMenuStyle.highScoreText}>high-score: 0</Text>
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

