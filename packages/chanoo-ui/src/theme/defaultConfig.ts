import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import { ConfigType } from '@stitches/react/types/config';
import { blue, gray, yellow } from './colors';

export const defaultColors = {
  white: '#ffffff',
  black: '#000000',
  ...blue,
  ...gray,
  ...yellow,

  primary: '$blue700'
};

const defaultTheme: ConfigType.Theme = {
  colors: defaultColors
};

const defaultConfig = {
  prefix: 'chanoo',
  theme: defaultTheme
};

export default defaultConfig;
