import React, { useState, useEffect}  from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { GameTitle } from '../../components';
import InstructionsStyle from './styles';

export default function InstructionsView({navigation}){

    function GoBackToMainMenu()
    {
        navigation.navigate("MainMenu");
    }

    return (<View style = {InstructionsStyle.generalStyle}>
                <View style = {{flex: 1, justifyContent: "center",alignItems: "center",}}>
                    <GameTitle fontSize={30}/>
                </View>
                <View style = {{flex: 4}}>
                    <Text style = {InstructionsStyle.instructionsText}>
                    Hey there! In this game you will be presented with a grid who's tiles all have the same color, except
                    for one. You will need to touch the tile that has a different color as fast as you before time runs out.
                    Doing so gives you points, but failing substracts more time out of the timer. Good Luck!
                    </Text>

                    <Text style = {InstructionsStyle.instructionsText}>
                        Note: There's an accesibility button in the main menu to make the game more slower, so that people with
                        voice over on have time to listen to what the voice over tells them and to make the corresponding gestures in order to tap the tiles. 
                    </Text>
                </View>
                <View style = {{flex: 1}}>
                    <TouchableOpacity style={{ alignItems: 'center', marginTop: 10 }} onPress={GoBackToMainMenu} 
                        accessibilityLabel="Go Home Button"
                        accessibilityHint="Takes you back to the main menu">
                        <Image source={require("../../assets/icons/home.png")} style={InstructionsStyle.HomeIcon} />
                    </TouchableOpacity>
                </View>
            </View>);
}