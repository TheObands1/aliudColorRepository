import React  from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import MainMenuStyle from './styles'
import { GameTitle } from '../../components';

export default function MainMenuView() {

  function onPressPlayButton() {
    console.log("onPressPlayButton event handler");
  };

  function onPressLeaderboardButton() {
    console.log("onPressLeaderboardButton event handler");
  };


  return (<View style={MainMenuStyle.generalStyle}>
            <GameTitle/>
            {/*Could be its own component? */}
            <TouchableOpacity onPress={onPressPlayButton} style={MainMenuStyle.playButtonArea}>
              <Image source={require("../../assets/icons/play_arrow.png")} style={MainMenuStyle.playIcon}/>
              <Text style={MainMenuStyle.playText}>play!</Text>
            </TouchableOpacity>
            {/*Could be its own component? */}
            {/*Could be its own component? */}
            <View style={MainMenuStyle.highScoreArea}>
              <Image source={require("../../assets/icons/trophy.png")} style={MainMenuStyle.highScoreIcon}/>
              <Text style={MainMenuStyle.highScoreText}>high-score</Text>
            </View>
            {/*Could be its own component? */}
            <TouchableOpacity onPress={onPressLeaderboardButton} style={MainMenuStyle.leaderboardArea}>
              <Image source={require("../../assets/icons/leaderboard.png")} style={MainMenuStyle.leaderboardIcon}/>
              <Text style={MainMenuStyle.leaderboardText}>leaderboard</Text>
            </TouchableOpacity>
          </View>
  );
}

