import React, { Component } from "react";
import { View } from "react-native";
import { GameTitle } from "../../components";
import GameStyle from "./styles";
import PropTypes from "prop-types";

export default function GameView() {
    return (
        <View style={GameStyle.backgroundStyle}>
          <GameTitle fontSize={30}/>
        </View>
      );

}

