import React, {useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity,  Dimensions  } from "react-native";
import { GameTitle } from "../../components";
import GameStyle from "./styles";
import { HSLNormalColor, HSLDifferentColor } from '../../utilities'
import PropTypes from "prop-types";

export default function GameView() {

  const [points, setPoints] = useState(0);
  const [gridSize, setGridSize] = useState(2);
  const [timeLeft, setTimeLeft] = useState(10);
  const [currentColor, setCurrentColor] = useState(HSLNormalColor());
  const [currentGridMargin, setCurrentGridMargin] = useState(2);
  const [differentTilePosition, setDifferentTilePosition] = useState([]);
  const [differentTileColor, setDifferentTileColor] = useState();
  const windowWidth = Dimensions.get('window').width;

  //RandomizeColors
  useEffect(() => {
    startNewRound();
 }, [])
    
 //Start Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => prevTime-3);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function GetRandomGridPosition(size) {
    return Math.floor(Math.random()*size);

  }

  function getNewGridSize(currentPoints){
    let newSize = Math.min(Math.max(Math.floor(Math.sqrt(currentPoints)), 2), 7);
    setGridSize(newSize)
  }

  function startNewRound() {
    setCurrentColor(HSLNormalColor());
    //console.log("original color h and l:"+ currentColor.h +"," + currentColor.l)
    let newRGB = HSLDifferentColor(currentColor);
    //console.log("this new rgb but is hsl"+newRGB)
    //console.log(`hsl(${newRGB.h}, ${newRGB.s}%, ${newRGB.l}%)`)
    setDifferentTileColor(`hsl(${newRGB.h}, ${newRGB.s}%, ${newRGB.l}%)`);
    getNewGridSize(points);
    setDifferentTilePosition([GetRandomGridPosition(gridSize),GetRandomGridPosition(gridSize)]);
  }

  const checkPressedTile = (row, column) => {
    if(row === differentTilePosition[0] && column == differentTilePosition[1])
    {
      setPoints(prevPoints => prevPoints+1);
      setTimeLeft(prevTime => prevTime+1);
      startNewRound();
    }
    else
    {
      setTimeLeft(prevTime => prevTime-3);
    }
  }

    return (
        <View style={GameStyle.backgroundStyle}>
          <View style={GameStyle.upperContainer}></View>
          <GameTitle fontSize={30}/>
          <View style = {{ flex: 1, height: windowWidth * 0.875, width: windowWidth * 0.875, flexDirection: 'row'}}>
              { 
                
                /*Create #gridsize views that will act as columns, side by side, thanks to this style having a row direction and flex 1 filling all the space*/
                Array(gridSize).fill().map((column, columnIndex) => (
                <View style={{ flex: 1, flexDirection: 'column'}} key={columnIndex}>
                  {
                     /*Inside each "column" create #gridsize touchable opacitys, which will create our "rows".   */
                    Array(gridSize).fill().map((row, rowIndex) => (
                      <TouchableOpacity
                        key={`${rowIndex}${columnIndex}`}
                        style=
                        {
                          {
                          flex: 1,
                          backgroundColor:    rowIndex == differentTilePosition[0] && columnIndex == differentTilePosition[1]
                                              ? differentTileColor
                                              : `hsl(${currentColor.h}, ${currentColor.s}%, ${currentColor.l}%)`,
                          margin: currentGridMargin
                          }
                        }
                        onPress={() => checkPressedTile(rowIndex,columnIndex)}
                      />
                    ))
                    }
                </View>
              ))
              }
          </View>
          {/*Bottom Part*/}
          <View style={GameStyle.bottomContainer}>
            <View style={GameStyle.bottomSection}>
              <Text style={GameStyle.counterCount}>{points}</Text>
              <Text style={GameStyle.counterLabel}>points</Text>
              <View style={GameStyle.bestScoreContainer}>
                <Image source={require("../../assets/icons/trophy.png")} style={GameStyle.bestScoreIcon}/>
                <Text style={GameStyle.bestScoreLabel}>0</Text>
              </View>
            </View>
            <View style={GameStyle.bottomSection}>
              <Text style={GameStyle.counterLabel}>time left</Text>
            </View>
            <View style={GameStyle.bottomSection}>
             <Text style={GameStyle.counterCount}>{timeLeft}</Text>
             <Text style={GameStyle.counterLabel}>time left</Text>
             <View style={GameStyle.bestScoreContainer}>
                <Image source={require("../../assets/icons/clock.png")} style={GameStyle.bestScoreIcon}/>
                <Text style={GameStyle.bestScoreLabel}>0</Text>
              </View>

            </View>
          </View>

        </View>
      );

}

