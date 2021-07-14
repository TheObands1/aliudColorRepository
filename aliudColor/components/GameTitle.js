import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GameTitle = () => {
    return(
        <View style={{ flexDirection: "row" }}>
            <Text style={[TitleStyle.fontStyle, { color: "#ecf0f1" }]}>aliud</Text>
            <Text style={[TitleStyle.fontStyle, { color: "#E64C3C" }, { textTransform: 'uppercase'}]}>c</Text>
            <Text style={[TitleStyle.fontStyle, { color: "#E57E31" }]}>o</Text>
            <Text style={[TitleStyle.fontStyle, { color: "#F1C431" }]}>l</Text>
            <Text style={[TitleStyle.fontStyle, { color: "#68CC73" }]}>o</Text>
            <Text style={[TitleStyle.fontStyle, { color: "#3998DB" }]}>r</Text>
        </View>
    );
}

const TitleStyle = StyleSheet.create({
    fontStyle: {
      fontSize: 50,
      fontFamily: "dogbyte"
    }
   });

export { GameTitle };