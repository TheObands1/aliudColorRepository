import React from 'react';
import renderer from 'react-test-renderer';
import { GameTitle } from "../../components";

describe('tests of the GameTitle', () => {
    it('Create the GameTitle and expect it to have 6 children, which represent the six letters of "aliudColor"', () => {
      const tree = renderer.create(<GameTitle />).toJSON();
      expect(tree.children.length).toBe(6);
    });

    it('Render the component correctly', () => {
        const tree = renderer.create(<GameTitle />).toJSON();
        expect(tree).toMatchSnapshot();
      });

  });