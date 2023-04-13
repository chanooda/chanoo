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
export const globalCss = stitches.globalCss;
