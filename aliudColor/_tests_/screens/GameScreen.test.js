import React from 'react';
import { shallow, configure} from 'enzyme';
import renderer from 'react-test-renderer';
import GameScreen from  '../../screens/GameScreen/index'
import { GameGrid } from '../../components'
import Adapter from "enzyme-adapter-react-16"


describe('<GameScreen /> tests', () => {
  /*
    it('Render the component correctly ', () => {
    
        const route = {
          isAccesibilityModeOn: false
        }
        const navigate = jest.fn();
        const tree = renderer.create(<GameScreen route= {route} navigation={{ navigate }} />).toJSON();
        //const tree = renderer.create(<GameScreen route= {route}/>).toJSON();
        expect(tree).toMatchSnapshot();
      });
      */
});
