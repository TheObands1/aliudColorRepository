import React from 'react';
import renderer from 'react-test-renderer';
import GameScreen from  '../../screens/GameScreen/index'
import { GameGrid } from '../../components'
describe('<GameScreen /> tests', () => {
  /*Although this test passes, because every round the grid color in the gamescreen is different, 
  running this test normally won't do it. You need to update it every time*/
    it('Render the component correctly ', () => {
    
        const route = { params: { isAccesibilityModeOn: false } }
        const navigate = jest.fn();
        const tree = renderer.create(<GameScreen route= {route} navigation={{ navigate }} />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    
});
