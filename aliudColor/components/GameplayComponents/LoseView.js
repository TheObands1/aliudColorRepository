import React from "react";
import { Text, View, Image,  StyleSheet } from "react-native";

const LoseView = () => {
    const LoseMessage = [
        "better luck next time!",
        "wanna try again?",
        "meh, i've seen better",
        "you lose!",
        "try for real next time",
        "c'mon you were almost there!",
        "you can do better than that"
    ];

    function getRandomMessage(){
        let randomIndex =  Math.floor(Math.random() * ((LoseMessage.length-1) - 0) + 0);
        return LoseMessage[randomIndex];
    }

    return(
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center'}}>
            <Text style={LoseStyle.LoseText}>{getRandomMessage()}</Text>
       </View>
    );
}

const LoseStyle = StyleSheet.create({
    LoseText: {
        fontFamily: 'dogbyte',
        textAlign: 'center',
        color: '#eee',
        marginTop: 20,
        fontSize: 60,
        textTransform: "capitalize"
      }
   });

export {LoseView};
