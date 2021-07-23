import React, {useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity,  Dimensions  } from "react-native";
import { GameTitle, GameGrid} from "../../components";
import { BottomArea } from "../../components/GameplayComponents/bottomComponents/BottomArea";
import { PauseView } from "../../components/GameplayComponents/pauseComponents/pauseView";
import { LoseView } from "../../components/GameplayComponents/loseView";
import GameStyle from "./styles";
import { HSLNormalColor, HSLDifferentColor } from '../../utilities'

export default function GameView() {

  const [points, setPoints] = useState(0);
  const [gridSize, setGridSize] = useState(2);
  const [timeLeft, setTimeLeft] = useState(10);
  const [currentColor, setCurrentColor] = useState(HSLNormalColor());
  const [currentGridMargin, setCurrentGridMargin] = useState(2);
  const [differentTilePosition, setDifferentTilePosition] = useState([]);
  const [differentTileColor, setDifferentTileColor] = useState();
  const [gameState, setGameState] = useState("Playing")
  const windowWidth = Dimensions.get('window').width;

  //RandomizeColors
  useEffect(() => {
    startNewRound();
 }, [])
    
 //Start Timer
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(gameState)
      if(gameState === "Playing")
      {
        if(timeLeft-3 <= 0)
        {
          setTimeLeft(0);
          setGameState("Lost");
        }
        else
        {
          setTimeLeft(prevTime => prevTime-3);
        }
      }
      
    }, 1000);
    return () => clearInterval(interval);
  }, [gameState, timeLeft]);

  function SetDefaultValues(){
    setGridSize(2);
    setTimeLeft(10)
    setCurrentGridMargin(2);
    setPoints(0);
  }

  function GetRandomGridPosition(size) {
    return Math.floor(Math.random()*size);
  }

  function getNewGridSize(currentPoints){
    let newSize = Math.min(Math.max(Math.floor(Math.sqrt(currentPoints)), 2), 7);
    setGridSize(newSize)
  }

  function startNewRound() {
    setCurrentColor(HSLNormalColor());
    let newRGB = HSLDifferentColor(currentColor);
    setDifferentTileColor(`hsl(${newRGB.h}, ${newRGB.s}%, ${newRGB.l}%)`);
    getNewGridSize(points);
    setDifferentTilePosition([GetRandomGridPosition(gridSize),GetRandomGridPosition(gridSize)]);
  }

  const checkPressedTile = (row, column) => {
    if(row === differentTilePosition[0] && column == differentTilePosition[1])
    {
      setPoints(prevPoints => prevPoints+1);
      setTimeLeft(prevTime => prevTime+1);
      setCurrentGridMargin(prevMargin => prevMargin+0.01)
      startNewRound();
    }
    else
    {
      if(timeLeft-3 < 0)
      {
        setTimeLeft(0);
      }
      else
      {
        setTimeLeft(prevTime => prevTime-3);
      }
    }
  }

  const changeGameState = () => {
    if(gameState === "Playing")
    {
      setGameState(prevState => prevState = "Paused");
      return;
    }
    if(gameState === "Paused")
    {
      setGameState("Playing")
      return;
    }
    if(gameState === "Lost")
    {
      SetDefaultValues();
      startNewRound();
      setGameState("Playing")
      return;
    }
  }

  function currentGameView() {
    switch(gameState)
    {
      case "Playing":
        return(
                <GameGrid gridSize = {gridSize} 
                          differentTilePosition = {differentTilePosition} 
                          differentTileColor = {differentTileColor} 
                          currentColor = {currentColor} 
                          currentGridMargin = {currentGridMargin} 
                          checkPressedTile ={checkPressedTile} />
        );
      case "Paused":
        return(<PauseView/>);
      case "Lost":
        return (<LoseView/>);
      default:
        return;
    }
  }


    return (
        <View style={GameStyle.backgroundStyle}>
          <View style ={{flex: 1, justifyContent: 'center'}}>
            <GameTitle fontSize={30}/>
          </View>
          <View style = {{ flex: 3, justifyContent: 'center' }}>
            <View style = {{ flex: 1, height: windowWidth / 2, width: windowWidth / 1.2, flexDirection: 'row'}}>
                {
                  currentGameView()
                }
            </View>
          </View>
          {/*Bottom Part*/}
          <View style={{ flex: 2 }}>
            <BottomArea gameState = {gameState} 
                        changeGameState = {changeGameState}  
                        points = {points} 
                        timeLeft = {timeLeft} 
                        windowWidth = {windowWidth}/>
          </View>
        </View>
      );

}

