import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const GameTitle = ({ fontSize }) => {
    return(
        <View style={{ flexDirection: "row" }}>
            <Text style={[TitleStyle.fontStyle, { color: "#ecf0f1", fontSize }]}>aliud</Text>
            <Text style={[TitleStyle.fontStyle, { color: "#E64C3C", textTransform: 'uppercase',fontSize }]}>c</Text>
            <Text style={[TitleStyle.fontStyle, { color: "#E57E31", fontSize }]}>o</Text>
            <Text style={[TitleStyle.fontStyle, { color: "#F1C431" , fontSize }]}>l</Text>
            <Text style={[TitleStyle.fontStyle, { color: "#68CC73" , fontSize }]}>o</Text>
            <Text style={[TitleStyle.fontStyle, { color: "#3998DB" , fontSize }]}>r</Text>
        </View>
    );
}

const TitleStyle = StyleSheet.create({
    fontStyle: {
      fontFamily: "dogbyte",
    }
   });

GameTitle.propTypes = {
    fontSize: PropTypes.number
  }
  
GameTitle.defaultProps = {
    fontSize: 55
  }


export { GameTitle };