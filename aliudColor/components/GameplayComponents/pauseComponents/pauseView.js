import React from "react";
import { Text, View, Image,  StyleSheet } from "react-native";

const PauseView = () => {
    return(
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require("../../../assets/icons/mug.png")} style={PauseStyle.pausedIcon}/>
            <Text style={PauseStyle.pausedText}>paused</Text>
       </View>
    );
}

const PauseStyle = StyleSheet.create({
    pausedText: {
        fontFamily: 'dogbyte',
        textAlign: 'center',
        color: '#eee',
        marginTop: 20,
        fontSize: 60,
      },
      pausedIcon: {
        width: 80,
        height: 80
      }
   });

export {PauseView};
