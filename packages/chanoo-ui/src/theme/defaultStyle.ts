import { CSS } from './stitches.config';

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
