import { defaultColors } from './defaultConfig';
import { Spaces, CSS, Sizes, Colors } from './stitches.config';

export type FontStyleKey = 'header1' | 'header2' | 'header3' | 'header4' | 'text' | 'caption';

export type FontStyle = Record<FontStyleKey, CSS>;

export const fontStyle: FontStyle = {
  caption: {
    fontWeight: '$normal',
    fs: '$sm'
  },
  header1: {
    fontWeight: '$extrabold',
    fs: '$4xl'
  },
  header2: {
    fontWeight: '$bold',
    fs: '$3xl'
  },
  header3: {
    fontWeight: '$semibold',
    fs: '$2xl'
  },
  header4: {
    fontWeight: '$semibold',
    fs: '$xl'
  },
  text: {
    fontWeight: '$normal',
    fs: '$md'
  }
};

type FontStyleElement = Record<FontStyleKey, { element: keyof JSX.IntrinsicElements }>;

export const fontStyleElement: FontStyleElement = {
  caption: {
    element: 'p'
  },
  header1: {
    element: 'h1'
  },
  header2: {
    element: 'h2'
  },
  header3: {
    element: 'h3'
  },
  header4: {
    element: 'h4'
  },
  text: {
    element: 'p'
  }
};

export type ColorStyleKey = keyof Colors;
export type ColorStyle = Record<ColorStyleKey, CSS>;
export const colorStyle: { [key: string]: CSS } = {};
export const bgColorStyle: { [key: string]: CSS } = {};
Object.keys(defaultColors).forEach((colorKey) => {
  colorStyle[colorKey] = {
    color: (defaultColors as Record<ColorStyleKey, string>)[colorKey as ColorStyleKey]
  };
});
Object.keys(defaultColors).forEach((colorKey) => {
  bgColorStyle[colorKey] = {
    backgroundColor: (defaultColors as Record<ColorStyleKey, string>)[colorKey as ColorStyleKey]
  };
});

export type SizeStyleKey = keyof Sizes;

export type SizeStyle = Omit<Record<SizeStyleKey, CSS>, 'screenW' | 'screenH'> & { screen: CSS };

export const sizeStyle: SizeStyle = {
  0: {
    h: '$0',
    w: '$0'
  },
  1: {
    h: '$1',
    w: '$1'
  },
  10: {
    h: '$10',
    w: '$10'
  },
  11: {
    h: '$11',
    w: '$11'
  },
  12: {
    h: '$12',
    w: '$12'
  },
  13: {
    h: '$13',
    w: '$13'
  },
  14: {
    h: '$14',
    w: '$14'
  },
  15: {
    h: '$15',
    w: '$15'
  },
  16: {
    h: '$16',
    w: '$16'
  },
  17: {
    h: '$17',
    w: '$17'
  },
  18: {
    h: '$18',
    w: '$18'
  },
  2: {
    h: '$2',
    w: '$2'
  },
  20: {
    h: '$20',
    w: '$20'
  },
  24: {
    h: '$24',
    w: '$24'
  },
  28: {
    h: '$28',
    w: '$28'
  },
  3: {
    h: '$3',
    w: '$3'
  },
  32: {
    h: '$32',
    w: '$32'
  },
  36: {
    h: '$36',
    w: '$36'
  },
  4: {
    h: '$4',
    w: '$4'
  },
  40: {
    h: '$40',
    w: '$40'
  },
  44: {
    h: '$44',
    w: '$44'
  },
  48: {
    h: '$48',
    w: '$48'
  },
  5: {
    h: '$5',
    w: '$5'
  },
  52: {
    h: '$52',
    w: '$52'
  },
  56: {
    h: '$56',
    w: '$56'
  },
  6: {
    h: '$6',
    w: '$6'
  },
  60: {
    h: '$60',
    w: '$60'
  },
  64: {
    h: '$64',
    w: '$64'
  },
  7: {
    h: '$7',
    w: '$7'
  },
  72: {
    h: '$72',
    w: '$72'
  },
  8: {
    h: '$8',
    w: '$8'
  },
  80: {
    h: '$80',
    w: '$80'
  },
  9: {
    h: '$9',
    w: '$9'
  },
  96: {
    h: '$96',
    w: '$96'
  },
  fit: {
    h: '$fit',
    w: '$fit'
  },
  full: {
    h: '$full',
    w: '$full'
  },
  max: {
    h: '$max',
    w: '$max'
  },
  min: {
    h: '$min',
    w: '$min'
  },
  screen: {
    h: '$screenH',
    w: '$screenW'
  }
};

export const widthStyle: SizeStyle = {
  0: {
    w: '$0'
  },
  1: {
    w: '$1'
  },
  10: {
    w: '$10'
  },
  11: {
    w: '$11'
  },
  12: {
    w: '$12'
  },
  13: {
    w: '$13'
  },
  14: {
    w: '$14'
  },
  15: {
    w: '$15'
  },
  16: {
    w: '$16'
  },
  17: {
    w: '$17'
  },
  18: {
    w: '$18'
  },
  2: {
    w: '$2'
  },
  20: {
    w: '$20'
  },
  24: {
    w: '$24'
  },
  28: {
    w: '$28'
  },
  3: {
    w: '$3'
  },
  32: {
    w: '$32'
  },
  36: {
    w: '$36'
  },
  4: {
    w: '$4'
  },
  40: {
    w: '$40'
  },
  44: {
    w: '$44'
  },
  48: {
    w: '$48'
  },
  5: {
    w: '$5'
  },
  52: {
    w: '$52'
  },
  56: {
    w: '$56'
  },
  6: {
    w: '$6'
  },
  60: {
    w: '$60'
  },
  64: {
    w: '$64'
  },
  7: {
    w: '$7'
  },
  72: {
    w: '$72'
  },
  8: {
    w: '$8'
  },
  80: {
    w: '$80'
  },
  9: {
    w: '$9'
  },
  96: {
    w: '$96'
  },
  fit: {
    w: '$fit'
  },
  full: {
    w: '$full'
  },
  max: {
    w: '$max'
  },
  min: {
    w: '$min'
  },
  screen: {
    w: '$screen'
  }
};

export const heightStyle: SizeStyle = {
  0: {
    h: '$0'
  },
  1: {
    h: '$1'
  },
  10: {
    h: '$10'
  },
  11: {
    h: '$11'
  },
  12: {
    h: '$12'
  },
  13: {
    h: '$13'
  },
  14: {
    h: '$14'
  },
  15: {
    h: '$15'
  },
  16: {
    h: '$16'
  },
  17: {
    h: '$17'
  },
  18: {
    h: '$18'
  },
  2: {
    h: '$2'
  },
  20: {
    h: '$20'
  },
  24: {
    h: '$24'
  },
  28: {
    h: '$28'
  },
  3: {
    h: '$3'
  },
  32: {
    h: '$32'
  },
  36: {
    h: '$36'
  },
  4: {
    h: '$4'
  },
  40: {
    h: '$40'
  },
  44: {
    h: '$44'
  },
  48: {
    h: '$48'
  },
  5: {
    h: '$5'
  },
  52: {
    h: '$52'
  },
  56: {
    h: '$56'
  },
  6: {
    h: '$6'
  },
  60: {
    h: '$60'
  },
  64: {
    h: '$64'
  },
  7: {
    h: '$7'
  },
  72: {
    h: '$72'
  },
  8: {
    h: '$8'
  },
  80: {
    h: '$80'
  },
  9: {
    h: '$9'
  },
  96: {
    h: '$96'
  },
  fit: {
    h: '$fit'
  },
  full: {
    h: '$full'
  },
  max: {
    h: '$max'
  },
  min: {
    h: '$min'
  },
  screen: {
    h: '$screenH',
    w: '$screenW'
  }
};

export type SpaceKey = keyof Spaces;

export type SpaceStyle = Omit<Record<SpaceKey, CSS>, 'screenW' | 'screenH'>;

export const gapStyle: SpaceStyle = {
  0: {
    gap: '$0'
  },
  1: {
    gap: '$1'
  },
  10: {
    gap: '$10'
  },
  11: {
    gap: '$11'
  },
  12: {
    gap: '$12'
  },
  13: {
    gap: '$13'
  },
  14: {
    gap: '$14'
  },
  15: {
    gap: '$15'
  },
  16: {
    gap: '$16'
  },
  17: {
    gap: '$17'
  },
  18: {
    gap: '$18'
  },
  2: {
    gap: '$2'
  },
  20: {
    gap: '$20'
  },
  24: {
    gap: '$24'
  },
  28: {
    gap: '$28'
  },
  3: {
    gap: '$3'
  },
  32: {
    gap: '$32'
  },
  36: {
    gap: '$36'
  },
  4: {
    gap: '$4'
  },
  40: {
    gap: '$40'
  },
  44: {
    gap: '$44'
  },
  48: {
    gap: '$48'
  },
  5: {
    gap: '$5'
  },
  52: {
    gap: '$52'
  },
  56: {
    gap: '$56'
  },
  6: {
    gap: '$6'
  },
  60: {
    gap: '$60'
  },
  64: {
    gap: '$64'
  },
  7: {
    gap: '$7'
  },
  72: {
    gap: '$72'
  },
  8: {
    gap: '$8'
  },
  80: {
    gap: '$80'
  },
  9: {
    gap: '$9'
  },
  96: {
    gap: '$96'
  },
  full: {
    gap: '$full'
  }
};

export const marginStyle: SpaceStyle = {
  0: {
    m: '$0'
  },
  1: {
    m: '$1'
  },
  10: {
    m: '$10'
  },
  11: {
    m: '$11'
  },
  12: {
    m: '$12'
  },
  13: {
    m: '$13'
  },
  14: {
    m: '$14'
  },
  15: {
    m: '$15'
  },
  16: {
    m: '$16'
  },
  17: {
    m: '$17'
  },
  18: {
    m: '$18'
  },
  2: {
    m: '$2'
  },
  20: {
    m: '$20'
  },
  24: {
    m: '$24'
  },
  28: {
    m: '$28'
  },
  3: {
    m: '$3'
  },
  32: {
    m: '$32'
  },
  36: {
    m: '$36'
  },
  4: {
    m: '$4'
  },
  40: {
    m: '$40'
  },
  44: {
    m: '$44'
  },
  48: {
    m: '$48'
  },
  5: {
    m: '$5'
  },
  52: {
    m: '$52'
  },
  56: {
    m: '$56'
  },
  6: {
    m: '$6'
  },
  60: {
    m: '$60'
  },
  64: {
    m: '$64'
  },
  7: {
    m: '$7'
  },
  72: {
    m: '$72'
  },
  8: {
    m: '$8'
  },
  80: {
    m: '$80'
  },
  9: {
    m: '$9'
  },
  96: {
    m: '$96'
  },
  full: {
    m: '$full'
  }
};

export const marginTopStyle: SpaceStyle = {
  0: {
    mt: '$0'
  },
  1: {
    mt: '$1'
  },
  10: {
    mt: '$10'
  },
  11: {
    mt: '$11'
  },
  12: {
    mt: '$12'
  },
  13: {
    mt: '$13'
  },
  14: {
    mt: '$14'
  },
  15: {
    mt: '$15'
  },
  16: {
    mt: '$16'
  },
  17: {
    mt: '$17'
  },
  18: {
    mt: '$18'
  },
  2: {
    mt: '$2'
  },
  20: {
    mt: '$20'
  },
  24: {
    mt: '$24'
  },
  28: {
    mt: '$28'
  },
  3: {
    mt: '$3'
  },
  32: {
    mt: '$32'
  },
  36: {
    mt: '$36'
  },
  4: {
    mt: '$4'
  },
  40: {
    mt: '$40'
  },
  44: {
    mt: '$44'
  },
  48: {
    mt: '$48'
  },
  5: {
    mt: '$5'
  },
  52: {
    mt: '$52'
  },
  56: {
    mt: '$56'
  },
  6: {
    mt: '$6'
  },
  60: {
    mt: '$60'
  },
  64: {
    mt: '$64'
  },
  7: {
    mt: '$7'
  },
  72: {
    mt: '$72'
  },
  8: {
    mt: '$8'
  },
  80: {
    mt: '$80'
  },
  9: {
    mt: '$9'
  },
  96: {
    mt: '$96'
  },
  full: {
    mt: '$full'
  }
};

export const marginRightStyle: SpaceStyle = {
  0: {
    mr: '$0'
  },
  1: {
    mr: '$1'
  },
  10: {
    mr: '$10'
  },
  11: {
    mr: '$11'
  },
  12: {
    mr: '$12'
  },
  13: {
    mr: '$13'
  },
  14: {
    mr: '$14'
  },
  15: {
    mr: '$15'
  },
  16: {
    mr: '$16'
  },
  17: {
    mr: '$17'
  },
  18: {
    mr: '$18'
  },
  2: {
    mr: '$2'
  },
  20: {
    mr: '$20'
  },
  24: {
    mr: '$24'
  },
  28: {
    mr: '$28'
  },
  3: {
    mr: '$3'
  },
  32: {
    mr: '$32'
  },
  36: {
    mr: '$36'
  },
  4: {
    mr: '$4'
  },
  40: {
    mr: '$40'
  },
  44: {
    mr: '$44'
  },
  48: {
    mr: '$48'
  },
  5: {
    mr: '$5'
  },
  52: {
    mr: '$52'
  },
  56: {
    mr: '$56'
  },
  6: {
    mr: '$6'
  },
  60: {
    mr: '$60'
  },
  64: {
    mr: '$64'
  },
  7: {
    mr: '$7'
  },
  72: {
    mr: '$72'
  },
  8: {
    mr: '$8'
  },
  80: {
    mr: '$80'
  },
  9: {
    mr: '$9'
  },
  96: {
    mr: '$96'
  },
  full: {
    mr: '$full'
  }
};

export const marginBottomStyle: SpaceStyle = {
  0: {
    mb: '$0'
  },
  1: {
    mb: '$1'
  },
  10: {
    mb: '$10'
  },
  11: {
    mb: '$11'
  },
  12: {
    mb: '$12'
  },
  13: {
    mb: '$13'
  },
  14: {
    mb: '$14'
  },
  15: {
    mb: '$15'
  },
  16: {
    mb: '$16'
  },
  17: {
    mb: '$17'
  },
  18: {
    mb: '$18'
  },
  2: {
    mb: '$2'
  },
  20: {
    mb: '$20'
  },
  24: {
    mb: '$24'
  },
  28: {
    mb: '$28'
  },
  3: {
    mb: '$3'
  },
  32: {
    mb: '$32'
  },
  36: {
    mb: '$36'
  },
  4: {
    mb: '$4'
  },
  40: {
    mb: '$40'
  },
  44: {
    mb: '$44'
  },
  48: {
    mb: '$48'
  },
  5: {
    mb: '$5'
  },
  52: {
    mb: '$52'
  },
  56: {
    mb: '$56'
  },
  6: {
    mb: '$6'
  },
  60: {
    mb: '$60'
  },
  64: {
    mb: '$64'
  },
  7: {
    mb: '$7'
  },
  72: {
    mb: '$72'
  },
  8: {
    mb: '$8'
  },
  80: {
    mb: '$80'
  },
  9: {
    mb: '$9'
  },
  96: {
    mb: '$96'
  },
  full: {
    mb: '$full'
  }
};

export const marginLeftStyle: SpaceStyle = {
  0: {
    ml: '$0'
  },
  1: {
    ml: '$1'
  },
  10: {
    ml: '$10'
  },
  11: {
    ml: '$11'
  },
  12: {
    ml: '$12'
  },
  13: {
    ml: '$13'
  },
  14: {
    ml: '$14'
  },
  15: {
    ml: '$15'
  },
  16: {
    ml: '$16'
  },
  17: {
    ml: '$17'
  },
  18: {
    ml: '$18'
  },
  2: {
    ml: '$2'
  },
  20: {
    ml: '$20'
  },
  24: {
    ml: '$24'
  },
  28: {
    ml: '$28'
  },
  3: {
    ml: '$3'
  },
  32: {
    ml: '$32'
  },
  36: {
    ml: '$36'
  },
  4: {
    ml: '$4'
  },
  40: {
    ml: '$40'
  },
  44: {
    ml: '$44'
  },
  48: {
    ml: '$48'
  },
  5: {
    ml: '$5'
  },
  52: {
    ml: '$52'
  },
  56: {
    ml: '$56'
  },
  6: {
    ml: '$6'
  },
  60: {
    ml: '$60'
  },
  64: {
    ml: '$64'
  },
  7: {
    ml: '$7'
  },
  72: {
    ml: '$72'
  },
  8: {
    ml: '$8'
  },
  80: {
    ml: '$80'
  },
  9: {
    ml: '$9'
  },
  96: {
    ml: '$96'
  },
  full: {
    ml: '$full'
  }
};

export const marginYStyle: SpaceStyle = {
  0: {
    my: '$0'
  },
  1: {
    my: '$1'
  },
  10: {
    my: '$10'
  },
  11: {
    my: '$11'
  },
  12: {
    my: '$12'
  },
  13: {
    my: '$13'
  },
  14: {
    my: '$14'
  },
  15: {
    my: '$15'
  },
  16: {
    my: '$16'
  },
  17: {
    my: '$17'
  },
  18: {
    my: '$18'
  },
  2: {
    my: '$2'
  },
  20: {
    my: '$20'
  },
  24: {
    my: '$24'
  },
  28: {
    my: '$28'
  },
  3: {
    my: '$3'
  },
  32: {
    my: '$32'
  },
  36: {
    my: '$36'
  },
  4: {
    my: '$4'
  },
  40: {
    my: '$40'
  },
  44: {
    my: '$44'
  },
  48: {
    my: '$48'
  },
  5: {
    my: '$5'
  },
  52: {
    my: '$52'
  },
  56: {
    my: '$56'
  },
  6: {
    my: '$6'
  },
  60: {
    my: '$60'
  },
  64: {
    my: '$64'
  },
  7: {
    my: '$7'
  },
  72: {
    my: '$72'
  },
  8: {
    my: '$8'
  },
  80: {
    my: '$80'
  },
  9: {
    my: '$9'
  },
  96: {
    my: '$96'
  },
  full: {
    my: '$full'
  }
};

export const marginXStyle: SpaceStyle = {
  0: {
    mx: '$0'
  },
  1: {
    mx: '$1'
  },
  10: {
    mx: '$10'
  },
  11: {
    mx: '$11'
  },
  12: {
    mx: '$12'
  },
  13: {
    mx: '$13'
  },
  14: {
    mx: '$14'
  },
  15: {
    mx: '$15'
  },
  16: {
    mx: '$16'
  },
  17: {
    mx: '$17'
  },
  18: {
    mx: '$18'
  },
  2: {
    mx: '$2'
  },
  20: {
    mx: '$20'
  },
  24: {
    mx: '$24'
  },
  28: {
    mx: '$28'
  },
  3: {
    mx: '$3'
  },
  32: {
    mx: '$32'
  },
  36: {
    mx: '$36'
  },
  4: {
    mx: '$4'
  },
  40: {
    mx: '$40'
  },
  44: {
    mx: '$44'
  },
  48: {
    mx: '$48'
  },
  5: {
    mx: '$5'
  },
  52: {
    mx: '$52'
  },
  56: {
    mx: '$56'
  },
  6: {
    mx: '$6'
  },
  60: {
    mx: '$60'
  },
  64: {
    mx: '$64'
  },
  7: {
    mx: '$7'
  },
  72: {
    mx: '$72'
  },
  8: {
    mx: '$8'
  },
  80: {
    mx: '$80'
  },
  9: {
    mx: '$9'
  },
  96: {
    mx: '$96'
  },
  full: {
    mx: '$full'
  }
};

export const paddingStyle: SpaceStyle = {
  0: {
    p: '$0'
  },
  1: {
    p: '$1'
  },
  10: {
    p: '$10'
  },
  11: {
    p: '$11'
  },
  12: {
    p: '$12'
  },
  13: {
    p: '$13'
  },
  14: {
    p: '$14'
  },
  15: {
    p: '$15'
  },
  16: {
    p: '$16'
  },
  17: {
    p: '$17'
  },
  18: {
    p: '$18'
  },
  2: {
    p: '$2'
  },
  20: {
    p: '$20'
  },
  24: {
    p: '$24'
  },
  28: {
    p: '$28'
  },
  3: {
    p: '$3'
  },
  32: {
    p: '$32'
  },
  36: {
    p: '$36'
  },
  4: {
    p: '$4'
  },
  40: {
    p: '$40'
  },
  44: {
    p: '$44'
  },
  48: {
    p: '$48'
  },
  5: {
    p: '$5'
  },
  52: {
    p: '$52'
  },
  56: {
    p: '$56'
  },
  6: {
    p: '$6'
  },
  60: {
    p: '$60'
  },
  64: {
    p: '$64'
  },
  7: {
    p: '$7'
  },
  72: {
    p: '$72'
  },
  8: {
    p: '$8'
  },
  80: {
    p: '$80'
  },
  9: {
    p: '$9'
  },
  96: {
    p: '$96'
  },
  full: {
    p: '$full'
  }
};

export const paddingTopStyle: SpaceStyle = {
  0: {
    pt: '$0'
  },
  1: {
    pt: '$1'
  },
  10: {
    pt: '$10'
  },
  11: {
    pt: '$11'
  },
  12: {
    pt: '$12'
  },
  13: {
    pt: '$13'
  },
  14: {
    pt: '$14'
  },
  15: {
    pt: '$15'
  },
  16: {
    pt: '$16'
  },
  17: {
    pt: '$17'
  },
  18: {
    pt: '$18'
  },
  2: {
    pt: '$2'
  },
  20: {
    pt: '$20'
  },
  24: {
    pt: '$24'
  },
  28: {
    pt: '$28'
  },
  3: {
    pt: '$3'
  },
  32: {
    pt: '$32'
  },
  36: {
    pt: '$36'
  },
  4: {
    pt: '$4'
  },
  40: {
    pt: '$40'
  },
  44: {
    pt: '$44'
  },
  48: {
    pt: '$48'
  },
  5: {
    pt: '$5'
  },
  52: {
    pt: '$52'
  },
  56: {
    pt: '$56'
  },
  6: {
    pt: '$6'
  },
  60: {
    pt: '$60'
  },
  64: {
    pt: '$64'
  },
  7: {
    pt: '$7'
  },
  72: {
    pt: '$72'
  },
  8: {
    pt: '$8'
  },
  80: {
    pt: '$80'
  },
  9: {
    pt: '$9'
  },
  96: {
    pt: '$96'
  },
  full: {
    pt: '$full'
  }
};

export const paddingRightStyle: SpaceStyle = {
  0: {
    pr: '$0'
  },
  1: {
    pr: '$1'
  },
  10: {
    pr: '$10'
  },
  11: {
    pr: '$11'
  },
  12: {
    pr: '$12'
  },
  13: {
    pr: '$13'
  },
  14: {
    pr: '$14'
  },
  15: {
    pr: '$15'
  },
  16: {
    pr: '$16'
  },
  17: {
    pr: '$17'
  },
  18: {
    pr: '$18'
  },
  2: {
    pr: '$2'
  },
  20: {
    pr: '$20'
  },
  24: {
    pr: '$24'
  },
  28: {
    pr: '$28'
  },
  3: {
    pr: '$3'
  },
  32: {
    pr: '$32'
  },
  36: {
    pr: '$36'
  },
  4: {
    pr: '$4'
  },
  40: {
    pr: '$40'
  },
  44: {
    pr: '$44'
  },
  48: {
    pr: '$48'
  },
  5: {
    pr: '$5'
  },
  52: {
    pr: '$52'
  },
  56: {
    pr: '$56'
  },
  6: {
    pr: '$6'
  },
  60: {
    pr: '$60'
  },
  64: {
    pr: '$64'
  },
  7: {
    pr: '$7'
  },
  72: {
    pr: '$72'
  },
  8: {
    pr: '$8'
  },
  80: {
    pr: '$80'
  },
  9: {
    pr: '$9'
  },
  96: {
    pr: '$96'
  },
  full: {
    pr: '$full'
  }
};

export const paddingBottomStyle: SpaceStyle = {
  0: {
    mb: '$0'
  },
  1: {
    pb: '$1'
  },
  10: {
    pb: '$10'
  },
  11: {
    pb: '$11'
  },
  12: {
    pb: '$12'
  },
  13: {
    pb: '$13'
  },
  14: {
    pb: '$14'
  },
  15: {
    pb: '$15'
  },
  16: {
    pb: '$16'
  },
  17: {
    pb: '$17'
  },
  18: {
    pb: '$18'
  },
  2: {
    pb: '$2'
  },
  20: {
    pb: '$20'
  },
  24: {
    pb: '$24'
  },
  28: {
    pb: '$28'
  },
  3: {
    pb: '$3'
  },
  32: {
    pb: '$32'
  },
  36: {
    pb: '$36'
  },
  4: {
    pb: '$4'
  },
  40: {
    pb: '$40'
  },
  44: {
    pb: '$44'
  },
  48: {
    pb: '$48'
  },
  5: {
    pb: '$5'
  },
  52: {
    pb: '$52'
  },
  56: {
    pb: '$56'
  },
  6: {
    pb: '$6'
  },
  60: {
    pb: '$60'
  },
  64: {
    pb: '$64'
  },
  7: {
    pb: '$7'
  },
  72: {
    pb: '$72'
  },
  8: {
    pb: '$8'
  },
  80: {
    pb: '$80'
  },
  9: {
    pb: '$9'
  },
  96: {
    pb: '$96'
  },
  full: {
    pb: '$full'
  }
};

export const paddingLeftStyle: SpaceStyle = {
  0: {
    pl: '$0'
  },
  1: {
    pl: '$1'
  },
  10: {
    pl: '$10'
  },
  11: {
    pl: '$11'
  },
  12: {
    pl: '$12'
  },
  13: {
    pl: '$13'
  },
  14: {
    pl: '$14'
  },
  15: {
    pl: '$15'
  },
  16: {
    pl: '$16'
  },
  17: {
    pl: '$17'
  },
  18: {
    pl: '$18'
  },
  2: {
    pl: '$2'
  },
  20: {
    pl: '$20'
  },
  24: {
    pl: '$24'
  },
  28: {
    pl: '$28'
  },
  3: {
    pl: '$3'
  },
  32: {
    pl: '$32'
  },
  36: {
    pl: '$36'
  },
  4: {
    pl: '$4'
  },
  40: {
    pl: '$40'
  },
  44: {
    pl: '$44'
  },
  48: {
    pl: '$48'
  },
  5: {
    pl: '$5'
  },
  52: {
    pl: '$52'
  },
  56: {
    pl: '$56'
  },
  6: {
    pl: '$6'
  },
  60: {
    pl: '$60'
  },
  64: {
    pl: '$64'
  },
  7: {
    pl: '$7'
  },
  72: {
    pl: '$72'
  },
  8: {
    pl: '$8'
  },
  80: {
    pl: '$80'
  },
  9: {
    pl: '$9'
  },
  96: {
    pl: '$96'
  },
  full: {
    pl: '$full'
  }
};

export const paddingYStyle: SpaceStyle = {
  0: {
    py: '$0'
  },
  1: {
    py: '$1'
  },
  10: {
    py: '$10'
  },
  11: {
    py: '$11'
  },
  12: {
    py: '$12'
  },
  13: {
    py: '$13'
  },
  14: {
    py: '$14'
  },
  15: {
    py: '$15'
  },
  16: {
    py: '$16'
  },
  17: {
    py: '$17'
  },
  18: {
    py: '$18'
  },
  2: {
    py: '$2'
  },
  20: {
    py: '$20'
  },
  24: {
    py: '$24'
  },
  28: {
    py: '$28'
  },
  3: {
    py: '$3'
  },
  32: {
    py: '$32'
  },
  36: {
    py: '$36'
  },
  4: {
    py: '$4'
  },
  40: {
    py: '$40'
  },
  44: {
    py: '$44'
  },
  48: {
    py: '$48'
  },
  5: {
    py: '$5'
  },
  52: {
    py: '$52'
  },
  56: {
    py: '$56'
  },
  6: {
    py: '$6'
  },
  60: {
    py: '$60'
  },
  64: {
    py: '$64'
  },
  7: {
    py: '$7'
  },
  72: {
    py: '$72'
  },
  8: {
    py: '$8'
  },
  80: {
    py: '$80'
  },
  9: {
    py: '$9'
  },
  96: {
    py: '$96'
  },
  full: {
    py: '$full'
  }
};

export const paddingXStyle: SpaceStyle = {
  0: {
    px: '$0'
  },
  1: {
    px: '$1'
  },
  10: {
    px: '$10'
  },
  11: {
    px: '$11'
  },
  12: {
    px: '$12'
  },
  13: {
    px: '$13'
  },
  14: {
    px: '$14'
  },
  15: {
    px: '$15'
  },
  16: {
    px: '$16'
  },
  17: {
    px: '$17'
  },
  18: {
    px: '$18'
  },
  2: {
    px: '$2'
  },
  20: {
    px: '$20'
  },
  24: {
    px: '$24'
  },
  28: {
    px: '$28'
  },
  3: {
    px: '$3'
  },
  32: {
    px: '$32'
  },
  36: {
    px: '$36'
  },
  4: {
    px: '$4'
  },
  40: {
    px: '$40'
  },
  44: {
    px: '$44'
  },
  48: {
    px: '$48'
  },
  5: {
    px: '$5'
  },
  52: {
    px: '$52'
  },
  56: {
    px: '$56'
  },
  6: {
    px: '$6'
  },
  60: {
    px: '$60'
  },
  64: {
    px: '$64'
  },
  7: {
    px: '$7'
  },
  72: {
    px: '$72'
  },
  8: {
    px: '$8'
  },
  80: {
    px: '$80'
  },
  9: {
    px: '$9'
  },
  96: {
    px: '$96'
  },
  full: {
    px: '$full'
  }
};

export const sizesStyle = {
  h: { ...heightStyle },
  size: { ...sizeStyle },
  w: { ...widthStyle }
};

export const spaceStyle = {
  gap: { ...gapStyle },
  mb: { ...marginBottomStyle },
  ml: { ...marginLeftStyle },
  mr: { ...marginRightStyle },
  mt: { ...marginTopStyle },
  mx: { ...marginXStyle },
  my: { ...marginYStyle },
  p: { ...paddingStyle },
  pb: { ...paddingBottomStyle },
  pl: { ...paddingLeftStyle },
  pr: { ...paddingRightStyle },
  pt: { ...paddingTopStyle },
  px: { ...paddingXStyle },
  py: { ...paddingYStyle }
};
