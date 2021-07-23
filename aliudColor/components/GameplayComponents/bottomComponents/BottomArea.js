import React from "react";
import { Text, View, StyleSheet, TouchableOpacity,  Dimensions, Image} from "react-native";
import botttomStyle from "./botttomStyle";
import PropTypes from "prop-types";

const BottomArea = ({gameState, changeGameState, points, timeLeft, windowWidth}) => {

    const gameStateButton = gameState === "Playing" ? require("../../../assets/icons/pause.png")
                                                : gameState === "Paused" ? require("../../../assets/icons/play.png")
                                                : require("../../../assets/icons/replay.png");

    return (
        <View style={{flex: 1, width: windowWidth * 0.875, flexDirection: 'row',}}>
            <View style={{ flex: 1, marginTop: 'auto', marginBottom: 'auto'}}>
                <Text style={botttomStyle.counterCount}>{points}</Text>
                <Text style={botttomStyle.counterLabel}>points</Text>
                <View style={botttomStyle.bestScoreContainer}>
                    <Image source={require("../../../assets/icons/trophy.png")} style={botttomStyle.bestScoreIcon}/>
                    <Text style={botttomStyle.bestScoreLabel}>0</Text>
                </View>
            </View>

            <View style={{ flex: 1, marginTop: 'auto', marginBottom: 'auto'}}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={changeGameState}>
                    <Image source={gameStateButton} style={botttomStyle.gameStateIcon} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, marginTop: 'auto', marginBottom: 'auto'}}>
                <Text style={botttomStyle.counterCount}>{timeLeft}</Text>
                <Text style={botttomStyle.counterLabel}>time left</Text>
                <View style={botttomStyle.bestScoreContainer}>
                    <Image source={require("../../../assets/icons/clock.png")} style={botttomStyle.bestScoreIcon}/>
                    <Text style={botttomStyle.bestScoreLabel}>0</Text>
                </View>
            </View>
        </View>
    );
}

export { BottomArea };