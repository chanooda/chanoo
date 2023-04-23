import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*': {
    border: 0,
    boxSizing: 'border-box',
    color: 'inherit',
    font: 'inherit',
    fontSize: '100%',
    margin: 0,
    padding: 0
  },
  a: { color: 'inherit', textDecoration: 'none' },
  body: { backgroundColor: '$background', color: '$text', lineHeight: 1 },
  'ol, ul': { listStyle: 'none' }
});

export default globalStyles;
