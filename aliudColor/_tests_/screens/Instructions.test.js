import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import Instructions from '../../screens/Instructions/index'

describe('tests for the <Instructions/> Screen', () => {

    it('Render the component correctly ', () => {
        const tree = renderer.create(<Instructions />).toJSON();
        expect(tree).toMatchSnapshot();
      });

  it('Navigates to main menu when button is pressed', () => {
    const navigate = jest.fn();
    const { getByAccessibilityLabel } = render(<Instructions navigation={{ navigate }} />);
    fireEvent.press(getByAccessibilityLabel("Go Home Button"));
    expect(navigate).toHaveBeenCalledWith('MainMenu');
  });
});

