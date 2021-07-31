import React from 'react';
import renderer from 'react-test-renderer';
import { PauseView } from "../../../../components"

describe('tests of the pauseView', () => {
    it('Create the pause view and expect it to have 2 children, which represent the paused image and text', () => {
      const tree = renderer.create(<PauseView />).toJSON();
      expect(tree.children.length).toBe(2);
    });

    it('Render the component correctly', () => {
        const tree = renderer.create(<PauseView />).toJSON();
        expect(tree).toMatchSnapshot();
      });

  });