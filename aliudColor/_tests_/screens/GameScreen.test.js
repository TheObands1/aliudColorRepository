import React from 'react';
import { mount} from 'enzyme';
import renderer from 'react-test-renderer';
import GameScreen from  '../../screens/GameScreen/index'
import { GameGrid } from '../../components'


describe('<GameScreen /> tests', () => {
    it('Render the component correctly ', () => {
        const tree = renderer.create(<GameScreen/>).toJSON();
        expect(tree).toMatchSnapshot();

      });
});