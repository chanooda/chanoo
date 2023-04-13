import { globalCss } from '../theme';

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    color: 'inherit',
    boxSizing: 'border-box'
  },
  body: { backgroundColor: '$background', lineHeight: 1, color: '$text' },
  'ol, ul': { listStyle: 'none' }
});

export default globalStyles;
