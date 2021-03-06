import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions;

export const NAMED_COLORS = {
  // grayscale (light to dark)
  white: 'rgba(255, 255, 255, 1)',
  bianca: 'rgba(251, 249, 240, 1)',
  timberwolf: 'rgba(218, 216, 210, 1)',
  magnesium: 'rgba(178, 178, 178, 1)',
  black: 'rgba(3, 3, 3, 1)',

  // blues (light to dark)
  iceberg: 'rgba(216, 240, 246, 1)',
  coolGray: 'rgba(136, 145, 181, 1)',
  blueBayoux: 'rgba(101, 113, 135, 1)',
  facebookBlue: 'rgba(66, 103, 178, 1)',
  blue: 'rgba(29, 86, 251, 1)',
  palatinateBlue: 'rgba(24, 76, 223, 1)',
  persianBlue: 'rgba(23, 68, 200, 1)',
  sapphire: 'rgba(10, 42, 102, 1)',
  tangaroa: 'rgba(1, 23, 65, 1)',
  blueCharcoal: 'rgba(1, 10, 28, 1)',

  // the rest
  yellow: 'rgba(246, 253, 55, 1)',
  green: 'rgba(106, 246, 162, 1)',
  turquoise: 'rgba(0, 205, 223, 1)',
  purple: 'rgba(144, 63, 199, 1)',
  pink: 'rgba(245, 64, 199, 1)',
  darkPink: 'rgba(200, 40, 159, 1)',
  orange: 'rgba(247, 144, 77, 1)',
  salmon: 'rgba(243, 91, 89, 1)',
};

export const COLORS = {
  ...NAMED_COLORS,
  background1: '#B721FF',
  background2: '#21D4FD',
  primary: '#B721FF',
  secondary: '#21D4FD',
};

export const SIZES = {
  base: 10,
  width,
  height,
};

function wp(percentage) {
  const value = (percentage * width) / 100;
  return Math.round(value);
}

const slideHeight = height * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
export const sliderWidth = width;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
const entryBorderRadius = 8;
