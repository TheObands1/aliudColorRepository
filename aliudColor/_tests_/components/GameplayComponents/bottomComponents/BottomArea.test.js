import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import {BottomArea} from "../../../../components/GameplayComponents/bottomComponents/BottomArea"

describe('tests for the <BottomArea/>', () => {
    
it('Render the component correctly ', () => {
    const tree = renderer.create(<BottomArea gameState = {"Lost"}
                                            changeGameState = {()=>console.log("Test")}
                                            points = {0}
                                            timeLeft = {0}
                                            windowWidth = {1}
                                            goBackToMainMenu = {()=>console.log("Test")}
                                            currentMaxPoints = {0}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  });