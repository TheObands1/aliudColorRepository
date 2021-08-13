import React from 'react';
import renderer from 'react-test-renderer';
import MainMenu from "../../screens/MainMenu/index"
import { NavigationContext } from "@react-navigation/native"
import { render, fireEvent, waitFor } from '@testing-library/react-native';

describe('tests for the <MainMenu/>', () => {
    
    const navContext = {
        isFocused: () => true,
        addListener: jest.fn(() => jest.fn())
      }
    it('Renders the component correctly', () => {
        const navigate = jest.fn();
        const tree = renderer.create(   <NavigationContext.Provider value={navContext}>
                                            <MainMenu navigation={{ navigate }} />
                                        </NavigationContext.Provider>
        );
        expect(tree).toMatchSnapshot();
    });
    it('Navigates to instructions screen when button is pressed', () => {
        const navigate = jest.fn();
        const { getByText } = render( <NavigationContext.Provider value={navContext}>
                                                        <MainMenu navigation={{ navigate }} />
                                                    </NavigationContext.Provider>);
        fireEvent.press(getByText("instructions"));
        expect(navigate).toHaveBeenCalledWith('Instructions');
      });

  });

  

 