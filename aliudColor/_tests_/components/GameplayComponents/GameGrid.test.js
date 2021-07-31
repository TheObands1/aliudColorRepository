import React from 'react';
import renderer from 'react-test-renderer';
import { GameGrid } from '../../../components';


describe('tests of the GameGrid', () => {
    it('Create the GameGrid and expect it to have 4 elements, because the grid size parameter is 4"', () => {
      const tree = renderer.create(<GameGrid gridSize = {4} 
                                            differentTilePosition = {[1,1]} 
                                            differentTileColor = {`hsl(120, 90%, 90%)`} 
                                            currentColor = {{h: 90, s:90, l:90}} 
                                            currentGridMargin = {2} 
                                            checkPressedTile ={()=>console.log("GameGrid Test")} />).toJSON();
      expect(tree.length).toBe(4);
    });

  });