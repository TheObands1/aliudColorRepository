import React from 'react';
import { HSLNormalColor, HSLDifferentColor } from '../../utilities'

const NormalColor = HSLNormalColor();
const DifferentColor = HSLDifferentColor(NormalColor);

describe('tests of the Normal Color Generator', () => {
    it('Random Color should have a hue inferior to 335', () => {
      expect(NormalColor.h <= 335).toBeTruthy();
    });
    it('Random Color should have a saturation between 90 and 95', () => {
        expect(NormalColor.s >= 90 && NormalColor.s < 95).toBeTruthy();
      });
    it('Random Color should have a lightness between 65 and 75', () => {
        expect(NormalColor.l >= 65 && NormalColor.l <= 75).toBeTruthy();
      });
});

describe('tests of the Different Color Generator', () => {
    it('Given a random color, the new different color should have a hue superior to the normal color\'s hue but inferior to 360', () => {
      expect(DifferentColor.h > NormalColor.h && DifferentColor.h <= 360).toBeTruthy();
    });
    it('Given a random color, the new different color should have a saturation superior to the normal color\'s saturation but inferior to 100', () => {
        expect(DifferentColor.s > NormalColor.s && DifferentColor.s <= 100).toBeTruthy();
      });
    it('Given a random color, the new different color should have a lightness superior to the normal color\'s lightness but inferior to 90', () => {
        expect(DifferentColor.l > NormalColor.l && DifferentColor.l <= 90).toBeTruthy();
      });
});