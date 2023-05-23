import type * as Stitches from '@stitches/react';
import { blue, gray, yellow } from './colors';
import { FValue } from './defaultConfig.type';

export const defaultColors = {
  black: '#000000',
  white: '#ffffff',
  ...blue,
  ...gray,
  ...yellow,

  primary: '$blue500',
  primary100: '$blue100',
  primary200: '$blue200',
  primary300: '$blue300',
  primary400: '$blue400',
  primary600: '$blue600',
  primary700: '$blue700',
  primary800: '$blue800',
  primary900: '$blue900'
};

export const defaultFontSizes = {
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
  lg: '1.125rem',
  md: '1rem',
  sm: '0.875rem',
  xl: '1.25rem',
  xs: '0.75rem'
};

export const defaultFontWeights = {
  black: 900,
  bold: 700,
  extrabold: 800,
  hairline: 100,
  light: 300,
  medium: 500,
  normal: 400,
  semibold: 600,
  thin: 200
};

export const defaultLineHeights = {
  '2xl': 2,
  '3xl': 2.25,
  '4xl': 2.5,
  '5xl': 1,
  '6xl': 1,
  '7xl': 1,
  '8xl': 1,
  '9xl': 1,
  lg: 1.75,
  md: 1.5,
  sm: 1.25,
  xl: 1.75,
  xs: 1
};

export const defaultLetterSpacings = {
  normal: '0',
  tight: '-0.025em',
  tighter: '-0.05em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em'
};

export const defaultSpaces = {
  0: '0rem',
  1: '0.125rem',
  10: '1.5rem',
  11: '1.75rem',
  12: '2rem',
  13: '2.25rem',
  14: '2.5rem',
  15: '2.75rem',
  16: '3rem',
  17: '3.5rem',
  18: '4rem',
  2: '0.25rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  3: '0.375rem',
  32: '8rem',
  36: '9rem',
  4: '0.5rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  5: '0.625rem',
  52: '13rem',
  56: '14rem',
  6: '0.75rem',
  60: '15rem',
  64: '16rem',
  7: '0.875rem',
  72: '18rem',
  8: '1rem',
  80: '20rem',
  9: '1.25rem',
  96: '24rem',
  full: '100%',
  screenH: '100vh',
  screenW: '100vw'
};

export const defaultSizes = {
  ...defaultSpaces,
  fit: 'fit-content',
  max: 'max-content',
  min: 'min-content'
};

export const defaultZIndices = {
  1: '100',
  10: '1000',
  2: '200',
  3: '300',
  4: '400',
  5: '500',
  max: '9999'
};

export const defaultRadii = {
  '2xl': '24px',
  '3xl': '32px',
  base: '14px',
  lg: '14px',
  md: '12px',
  pill: '9999px',
  rounded: '50%',
  sm: '9px',
  squared: '33%',
  xl: '18px',
  xs: '7px'
};

export const defaultBreakPoints = {
  lg: '1400px',
  md: '1280px',
  sm: '960px',
  xl: '1920px',
  xs: '650px'
};

export const defaultMedia = {
  dark: '(prefers-color-scheme: dark)',
  hover: '(any-hover: hover)',
  lg: `(min-width: ${defaultBreakPoints.lg})`,
  lgMax: `(max-width: ${defaultBreakPoints.lg})`,
  lgMin: `(min-width: ${defaultBreakPoints.lg})`,
  light: '(prefers-color-scheme: light)',
  md: `(min-width: ${defaultBreakPoints.md})`,
  mdMax: `(max-width: ${defaultBreakPoints.md})`,
  mdMin: `(min-width: ${defaultBreakPoints.md})`,
  motion: '(prefers-reduced-motion: reduce)',
  safari: 'not all and (min-resolution:.001dpcm)',
  sm: `(min-width: ${defaultBreakPoints.sm})`,
  smMax: `(max-width: ${defaultBreakPoints.sm})`,
  smMin: `(min-width: ${defaultBreakPoints.sm})`,
  xl: `(min-width: ${defaultBreakPoints.xl})`,
  xlMax: `(max-width: ${defaultBreakPoints.xl})`,
  xlMin: `(min-width: ${defaultBreakPoints.xl})`,
  xs: `(min-width: ${defaultBreakPoints.xs})`,
  xsMax: `(max-width: ${defaultBreakPoints.xs})`,
  xsMin: `(min-width: ${defaultBreakPoints.xs})`
};

export const defaultUtils = {
  ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
    alignContent: value
  }),
  ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
    alignItems: value
  }),
  appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
    WebkitAppearance: value,
    appearance: value
  }),
  as: (value: Stitches.PropertyValue<'alignSelf'>) => ({
    alignSelf: value
  }),
  bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
    borderBottomLeftRadius: value
  }),
  bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
    borderBottomRightRadius: value
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
  bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
    boxShadow: value
  }),
  btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
    borderTopLeftRadius: value
  }),
  btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
    borderTopRightRadius: value
  }),
  bw: (value: Stitches.PropertyValue<'borderWidth'>) => ({
    borderWidth: value
  }),
  colCenter: () => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }),
  d: (value: Stitches.PropertyValue<'display'>) => ({ display: value }),
  dropShadow: (value: Stitches.PropertyValue<'boxShadow'>) => ({
    filter: `$dropShadows${value}`
  }),
  ds: (value: Stitches.PropertyValue<'boxShadow'>) => ({
    dropShadow: value
  }),
  dshadow: (value: Stitches.PropertyValue<'boxShadow'>) => ({
    dropShadow: value
  }),
  f: (value: FValue) => {
    const val = value.split(' ');
    return {
      alignItems: val[0],
      display: 'flex',
      justifyContent: val[1]
    };
  },
  fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({
    flexBasis: value
  }),
  fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
    flexDirection: value
  }),
  fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
  flex: (flex: Stitches.PropertyValue<'flex'>) => ({ flex }),
  flexCenter: (value: boolean) => {
    if (!value) {
      return {};
    }
    return { alignItems: 'center', display: 'flex', justifyContent: 'center' };
  },
  fs: (value: Stitches.PropertyValue<'fontSize'>) => ({
    fontSize: value
  }),
  fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
  h: (value: Stitches.PropertyValue<'height'>) => ({ height: value }),
  jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
    justifyContent: value
  }),
  lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
    lineHeight: value
  }),
  linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`
  }),
  m: (value: Stitches.PropertyValue<'margin'>) => ({
    margin: value
  }),
  maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({ maxHeight: value }),
  maxSize: (value: Stitches.PropertyValue<'width'>) => ({
    maxHeight: value,
    maxWidth: value
  }),
  maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({ maxWidth: value }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
    marginBottom: value
  }),
  mimW: (value: Stitches.PropertyValue<'maxWidth'>) => ({ minWidth: value }),
  minH: (value: Stitches.PropertyValue<'maxHeight'>) => ({ minHeight: value }),
  minSize: (value: Stitches.PropertyValue<'width'>) => ({
    minHeight: value,
    minWidth: value
  }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value
  }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
    marginRight: value
  }),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value
  }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginBottom: value,
    marginTop: value
  }),
  normalShadow: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    boxShadow: `0 4px 14px 0 $colors${value}`
  }),
  normalShadowVar: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    boxShadow: `0 4px 14px 0 ${value}`
  }),
  ov: (value: Stitches.PropertyValue<'overflow'>) => ({ overflow: value }),
  ox: (value: Stitches.PropertyValue<'overflowX'>) => ({
    overflowX: value
  }),
  oy: (value: Stitches.PropertyValue<'overflowY'>) => ({
    overflowY: value
  }),
  p: (value: Stitches.PropertyValue<'padding'>) => ({
    padding: value
  }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value
  }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value
  }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value
  }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value
  }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingBottom: value,
    paddingTop: value
  }),
  scale: (value: Stitches.PropertyValue<'scale'>) => ({
    transform: `scale(${value})`
  }),
  shadow: (value: Stitches.PropertyValue<'boxShadow'>) => ({
    boxShadow: value
  }),
  size: (value: Stitches.PropertyValue<'width'>) => ({
    height: value,
    width: value
  }),
  ta: (value: Stitches.PropertyValue<'textAlign'>) => ({
    textAlign: value
  }),
  tdl: (value: Stitches.PropertyValue<'textDecorationLine'>) => ({
    textDecorationLine: value
  }),
  textGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    '&::selection': {
      WebkitTextFillColor: '$colors$text'
    },
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: `linear-gradient(${value})`
  }),
  to: (value: Stitches.PropertyValue<'textOverflow'>) => ({
    textOverflow: value
  }),
  truncateText: (value: Stitches.PropertyValue<'width'>) => ({
    maxWidth: value,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }),
  us: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value
  }),
  w: (value: Stitches.PropertyValue<'width'>) => ({ width: value })
};

const defaultTheme = {
  breakpoints: defaultBreakPoints,
  colors: defaultColors,
  fontSizes: defaultFontSizes,
  fontWeights: defaultFontWeights,
  letterSpacings: defaultLetterSpacings,
  lineHeights: defaultLineHeights,
  radii: defaultRadii,
  sizes: defaultSizes,
  space: defaultSpaces,
  zIndices: defaultZIndices
};

const defaultConfig = {
  media: defaultMedia,
  prefix: 'chanoo',
  theme: { ...defaultTheme },
  utils: defaultUtils
};

export default defaultConfig;
