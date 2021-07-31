import React from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";


const GameGrid = ({gridSize, differentTilePosition, differentTileColor, currentColor, currentGridMargin, checkPressedTile}) => {
    return (
            Array(gridSize).fill().map((column, columnIndex) => (
                <View style={{ flex: 1, flexDirection: 'column'}} key={columnIndex} testID="gridColumn">
                {
                    /*Inside each "column" create #gridsize touchable opacitys, which will create our "rows".   */
                    Array(gridSize).fill().map((row, rowIndex) => (
                    <TouchableOpacity 
                        testID="gridTile"
                        accessible={true}
                        accessibilityLabel= {(rowIndex == differentTilePosition[0] && columnIndex == differentTilePosition[1] 
                                            ? "Correct!" : " Wrong!")}
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
            );
}


GameGrid.propTypes = {
    gridSize: PropTypes.number,
    differentTilePosition: PropTypes.array,
    differentTileColor: PropTypes.string,
    currentColor: PropTypes.object,
    currentGridMargin: PropTypes.number,
    checkPressedTile: PropTypes.func
  }

  export { GameGrid };