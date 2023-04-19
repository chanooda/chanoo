import type * as Stitches from '@stitches/react';
import { OnlyString, Property } from '@stitches/react/types/css';
import { CSSProperties } from 'react';
import { blue, gray, yellow } from './colors';
import { FValue } from './defaultConfig.type';

export const defaultColors = {
  white: '#ffffff',
  black: '#000000',
  ...blue,
  ...gray,
  ...yellow,

  primary: '$blue700'
};

export const defaultFontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem'
};

export const defaultFontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};

export const defaultLineHeights = {
  xs: 1,
  sm: 1.25,
  md: 1.5,
  lg: 1.75,
  xl: 1.75,
  '2xl': 2,
  '3xl': 2.25,
  '4xl': 2.5,
  '5xl': 1,
  '6xl': 1,
  '7xl': 1,
  '8xl': 1,
  '9xl': 1
};

export const defaultLetterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em'
};

export const defaultSpaces = {
  0: '0rem',
  screen: '100vw',
  full: '100%',
  px: '1px',
  1: '0.125rem',
  2: '0.25rem',
  3: '0.375rem',
  4: '0.5rem',
  5: '0.625rem',
  6: '0.75rem',
  7: '0.875rem',
  8: '1rem',
  9: '1.25rem',
  10: '1.5rem',
  11: '1.75rem',
  12: '2rem',
  13: '2.25rem',
  14: '2.5rem',
  15: '2.75rem',
  16: '3rem',
  17: '3.5rem',
  18: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem'
};

export const defaultSizes = {
  ...defaultSpaces,
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content'
};

export const defaultZIndices = {
  1: '100',
  2: '200',
  3: '300',
  4: '400',
  5: '500',
  10: '1000',
  max: '9999'
};

export const defaultRadii = {
  xs: '7px',
  sm: '9px',
  md: '12px',
  base: '14px',
  lg: '14px',
  xl: '18px',
  '2xl': '24px',
  '3xl': '32px',
  squared: '33%',
  rounded: '50%',
  pill: '9999px'
};

export const defaultBreakPoints = {
  xs: '650px',
  sm: '960px',
  md: '1280px',
  lg: '1400px',
  xl: '1920px'
};

export const defaultUtils = {
  p: (value: Stitches.PropertyValue<'padding'>) => ({
    padding: value
  }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value
  }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value
  }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value
  }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value
  }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  m: (value: Stitches.PropertyValue<'margin'>) => ({
    margin: value
  }),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value
  }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
    marginRight: value
  }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
    marginBottom: value
  }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value
  }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value
  }),
  ta: (value: Stitches.PropertyValue<'textAlign'>) => ({
    textAlign: value
  }),
  to: (value: Stitches.PropertyValue<'textOverflow'>) => ({
    textOverflow: value
  }),
  d: (value: Stitches.PropertyValue<'display'>) => ({ display: value }),
  flex: (flex: Stitches.PropertyValue<'flex'>) => ({ flex }),
  f: (value: FValue) => {
    const val = value.split(' ');
    return {
      display: 'flex',
      alignItems: val[0],
      justifyContent: val[1]
    };
  },
  rowCenter: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }),
  colCenter: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }),
  fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
    flexDirection: value
  }),
  fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
  ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
    alignItems: value
  }),
  ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
    alignContent: value
  }),
  jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
    justifyContent: value
  }),
  as: (value: Stitches.PropertyValue<'alignSelf'>) => ({
    alignSelf: value
  }),
  fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
  fs: (value: Stitches.PropertyValue<'fontSize'>) => ({
    fontSize: value
  }),
  fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({
    flexBasis: value
  }),
  bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value
  }),
  bf: (value: Stitches.PropertyValue<'backdropFilter'>) => ({
    backdropFilter: value
  }),
  bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    background: value
  }),
  bgBlur: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    bf: 'saturate(180%) blur(10px)',
    bg: value
  }),
  bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value
  }),
  br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderRadius: value
  }),
  bw: (value: Stitches.PropertyValue<'borderWidth'>) => ({
    borderWidth: value
  }),
  btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
    borderTopRightRadius: value
  }),
  bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
    borderBottomRightRadius: value
  }),
  bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
    borderBottomLeftRadius: value
  }),
  btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
    borderTopLeftRadius: value
  }),
  bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
    boxShadow: value
  }),
  ds: (value: Stitches.PropertyValue<'boxShadow'>) => ({
    dropShadow: value
  }),
  shadow: (value: Stitches.PropertyValue<'boxShadow'>) => ({
    boxShadow: value
  }),
  dshadow: (value: Stitches.PropertyValue<'boxShadow'>) => ({
    dropShadow: value
  }),
  dropShadow: (value: Stitches.PropertyValue<'boxShadow'>) => ({
    filter: `$dropShadows${value}`
  }),
  normalShadow: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    boxShadow: `0 4px 14px 0 $colors${value}`
  }),
  normalShadowVar: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    boxShadow: `0 4px 14px 0 ${value}`
  }),
  lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
    lineHeight: value
  }),
  ov: (value: Stitches.PropertyValue<'overflow'>) => ({ overflow: value }),
  ox: (value: Stitches.PropertyValue<'overflowX'>) => ({
    overflowX: value
  }),
  oy: (value: Stitches.PropertyValue<'overflowY'>) => ({
    overflowY: value
  }),
  us: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value
  }),
  w: (value: Stitches.PropertyValue<'width'>) => ({ width: value }),
  h: (value: Stitches.PropertyValue<'height'>) => ({ height: value }),
  maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({ maxWidth: value }),
  maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({ maxHeight: value }),
  mimW: (value: Stitches.PropertyValue<'maxWidth'>) => ({ minWidth: value }),
  minH: (value: Stitches.PropertyValue<'maxHeight'>) => ({ minHeight: value }),
  size: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
    height: value
  }),
  minSize: (value: Stitches.PropertyValue<'width'>) => ({
    minWidth: value,
    minHeight: value
  }),
  maxSize: (value: Stitches.PropertyValue<'width'>) => ({
    maxWidth: value,
    maxHeight: value
  }),
  appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
    WebkitAppearance: value,
    appearance: value
  }),
  scale: (value: Stitches.PropertyValue<'scale'>) => ({
    transform: `scale(${value})`
  }),
  linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`
  }),
  tdl: (value: Stitches.PropertyValue<'textDecorationLine'>) => ({
    textDecorationLine: value
  }),
  truncateText: (value: Stitches.PropertyValue<'width'>) => ({
    maxWidth: value,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }),
  textGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '&::selection': {
      WebkitTextFillColor: '$colors$text'
    }
  })
};

const defaultTheme = {
  colors: defaultColors,
  fontSizes: defaultFontSizes,
  fontWeights: defaultFontWeights,
  lineHeights: defaultLineHeights,
  letterSpacings: defaultLetterSpacings,
  space: defaultSpaces,
  sizes: defaultSizes,
  zIndices: defaultZIndices,
  radii: defaultRadii,
  breakpoints: defaultBreakPoints
};

const defaultConfig = {
  prefix: 'chanoo',
  theme: { ...defaultTheme },
  utils: defaultUtils
};

export default defaultConfig;
