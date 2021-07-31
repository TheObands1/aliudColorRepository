import React from 'react';
import renderer from 'react-test-renderer';
import { LoseView } from '../../../components';
import {render, screen, act} from "@testing-library/react-native"
import { create } from 'react-test-renderer'

describe('tests of the Lose View', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve ({
                data: "The Joke"
            })
        }))
    });
/*
    it("Loads the joke on mount", async () =>{
        await act(async () => create(<LoseView />));
        expect(screen.getByText("The Joke")).toBeInDocument();
    })
*/
    it('Render the component correctly ', () => {
        const tree = renderer.create(<LoseView />).toJSON();
        expect(tree).toMatchSnapshot();
      });

  });