import React from "react";
import { Text, View, StyleSheet, TouchableOpacity,  Dimensions, Image} from "react-native";
import botttomStyle from "./botttomStyle";
import PropTypes from "prop-types";
import * as SQLite from 'expo-sqlite';

const BottomArea = ({gameState, changeGameState, points, timeLeft, windowWidth, goBackToMainMenu, currentMaxPoints}) => {
    
    const gameDatabase = SQLite.openDatabase("gameDatabase");
    const gameStateButtonIcon = gameState === "Playing" ? require("../../../assets/icons/pause.png")
                                                : gameState === "Paused" ? require("../../../assets/icons/play.png")
                                                : require("../../../assets/icons/replay.png");
                
    function showHomeButton(){
        if(gameState === "Lost" || gameState === "Paused")
        {
            return (<TouchableOpacity style={{ alignItems: 'center', marginTop: 10 }} onPress={goBackToMainMenu} 
                        accessibilityLabel="Go Home Button"
                        accessibilityHint="Takes you back to the main menu">
                        <Image source={require("../../../assets/icons/home.png")} style={botttomStyle.gameStateIcon} />
                    </TouchableOpacity>);
        }
        else
        {
            return;
        }
    }

    return (
        <View style={{flex: 1, width: windowWidth * 0.875, flexDirection: 'row',}}>
            <View style={{ flex: 1, marginTop: 'auto', marginBottom: 'auto'}}> 
                <View accessible={true}>
                    <Text style={botttomStyle.counterCount}>{points}</Text>
                    <Text style={botttomStyle.counterLabel}>points</Text>
                </View>
                <View style={botttomStyle.bestScoreContainer} accessible={true} accessibilityLabel= {"Current High Score"+currentMaxPoints}>
                    <Image source={require("../../../assets/icons/trophy.png")} style={botttomStyle.bestScoreIcon}/>
                    <Text style={botttomStyle.bestScoreLabel}>{currentMaxPoints}</Text>
                </View>
            </View>

            <View style={{ flex: 1, marginTop: 'auto', marginBottom: 'auto'}}>
                <TouchableOpacity style={{ alignItems: 'center' }} 
                    onPress={changeGameState}
                    accessibilityLabel= { gameState === "Playing" ? "Pause Game Button"
                                                : gameState === "Paused" ? "Resume Game Button"
                                                : "Replay Button"}>
                    <Image source={gameStateButtonIcon} style={botttomStyle.gameStateIcon} />
                </TouchableOpacity>
                {
                    showHomeButton()
                }
            </View>

            <View style={{ flex: 1, marginTop: 'auto', marginBottom: 'auto'}}>
                <View accessible={true}>
                    <Text style={botttomStyle.counterCount}>{timeLeft}</Text>
                    <Text style={botttomStyle.counterLabel}>time left</Text>
                </View>
                <View style={botttomStyle.bestScoreContainer} accessibilityLabel="Time Icon">
                    <Image source={require("../../../assets/icons/clock.png")} style={botttomStyle.bestScoreIcon}/>
                </View>
            </View>
        </View>
    );
}

export { BottomArea };