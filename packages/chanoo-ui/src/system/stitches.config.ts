import type * as Stitches from '@stitches/react';

import { createStitches } from '@stitches/react';

import defaultConfig from './defaultConfig';
import lightTheme from './light-theme';

const stitches = createStitches({
  ...defaultConfig,
  theme: {
    ...defaultConfig.theme,
    colors: {
      ...defaultConfig.theme.colors,
      ...lightTheme.colors
    }
  }
});

export const styled = stitches.styled;
export const css = stitches.css;
export const globalCss = stitches.globalCss;
export const keyframes = stitches.keyframes;
export const getCssText = stitches.getCssText;
export const theme = stitches.theme;
export const config = stitches.config;
export const createTheme = stitches.createTheme;

export type StitchesConfig = typeof config;
export type VariantProps<T extends { [key: string]: any; [key: symbol]: any }> =
  Stitches.VariantProps<T>;
export type PropertyValue<T extends keyof Stitches.CSSProperties> = Stitches.PropertyValue<T>;
export type ScaleValue<T> = Stitches.ScaleValue<T>;
export type CSSProperties = Stitches.CSSProperties;
export type CSS = Stitches.CSS<StitchesConfig>;
export type StitchesTheme = typeof theme;

// common theme types
export type Spaces = StitchesConfig['theme']['space'];
export type FontSizes = StitchesConfig['theme']['fontSizes'];
export type Sizes = StitchesConfig['theme']['sizes'];
// export type Fonts = StitchesConfig['theme']['fonts'];
export type FontWeights = StitchesConfig['theme']['fontWeights'];
export type LineHeights = StitchesConfig['theme']['lineHeights'];
export type LetterSpacings = StitchesConfig['theme']['letterSpacings'];
export type Colors = StitchesConfig['theme']['colors'];
export type Radii = StitchesConfig['theme']['radii'];
export type zIndices = StitchesConfig['theme']['zIndices'];
// export type BorderWidhts = StitchesConfig['theme']['borderWidths'];
// export type Tranistions = StitchesConfig['theme']['transitions'];
export type Breakpoints = StitchesConfig['theme']['breakpoints'];
