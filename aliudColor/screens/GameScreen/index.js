import React, {useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity,  Dimensions  } from "react-native";
import { GameTitle, GameGrid} from "../../components";
import { BottomArea } from "../../components/GameplayComponents/bottomComponents/BottomArea";
import { PauseView } from "../../components/GameplayComponents/pauseComponents/pauseView";
import { LoseView } from "../../components/GameplayComponents/LoseView";
import GameStyle from "./styles";
import { HSLNormalColor, HSLDifferentColor } from '../../utilities'
import * as SQLite from 'expo-sqlite';

export default function GameView({route, navigation}) {

  const {isAccesibilityModeOn} = route.params;

  const [points, setPoints] = useState(0);
  const [currentMaxPoints, setCurrentMaxPoints] = useState(0);
  const [gridSize, setGridSize] = useState(2);
  const [timeLeft, setTimeLeft] = useState(10);
  const [timeToSubstract, setTimeToSubstract] = useState(3);
  const [currentColor, setCurrentColor] = useState(HSLNormalColor());
  const [currentGridMargin, setCurrentGridMargin] = useState(2);
  const [differentTilePosition, setDifferentTilePosition] = useState([]);
  const [differentTileColor, setDifferentTileColor] = useState();
  const [gameState, setGameState] = useState("Playing")
  const windowWidth = Dimensions.get('window').width;
  const gameDatabase = SQLite.openDatabase("gameDatabase");
  
  useEffect(() => {
    getCurrentMaxPoints();
    SetDefaultValues();
    startNewRound();
 }, [])

  const SavePoints  = () => {
    gameDatabase.transaction(tx => {
      tx.executeSql('INSERT INTO Scores (Score) values (?)', [points],
        (txObj, resultSet) => console.log("Insert was successful"),
        (txObj, error) => console.log('Error in insert', error))
    })
  }
    
 //Start Timer
  useEffect(() => {
    const interval = setInterval(() => {
      if(gameState === "Playing")
      {
        if(timeLeft-timeToSubstract <= 0)
        {
          setTimeLeft(0);
          setGameState("Lost");
          //Save points in DB
          SavePoints();
          if(points > currentMaxPoints)
          {
            setCurrentMaxPoints(points);
          }

        }
        else
        {
          setTimeLeft(prevTime => prevTime-timeToSubstract);
        }
      }
      
    }, 1000);
    return () => clearInterval(interval);
  }, [gameState, timeLeft]);

  function getCurrentMaxPoints(){
    gameDatabase.transaction(tx => {
      tx.executeSql('SELECT MAX(Score) FROM Scores', null, // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows: { _array } }) => setCurrentMaxPoints(_array[0]["MAX(Score)"]), 
        // failure callback which sends two things Transaction object and Error
        (txObj, error) => console.log('This Error ', error)
        ) // end executeSQL
    }) // end transaction
}

  function SetDefaultValues(){
    if(isAccesibilityModeOn)
    {
      setTimeToSubstract(1);
      setTimeLeft(20);
    }
    else
    {
      setTimeToSubstract(3);
      setTimeLeft(10);
    }
    setGridSize(2);
    setCurrentGridMargin(2);
    setPoints(0);
    setGameState("Playing");
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
      if(timeLeft-timeToSubstract < 0)
      {
        setTimeLeft(0);
      }
      else
      {
        setTimeLeft(prevTime => prevTime-2);
      }
    }
  }

  const changeGameState = () => {
    if(gameState === "Playing")
    {
      setGameState("Paused");
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

  function goBackToMainMenu(){
    navigation.navigate("MainMenu");
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
          <View style={{ flex: 2 }}>
            <BottomArea gameState = {gameState} 
                        changeGameState = {changeGameState}  
                        points = {points} 
                        timeLeft = {timeLeft} 
                        windowWidth = {windowWidth}
                        goBackToMainMenu = {goBackToMainMenu}
                        currentMaxPoints = {currentMaxPoints}
                        />
          </View>
        </View>
      );

}

