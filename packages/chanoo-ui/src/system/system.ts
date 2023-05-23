import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*': {
    '&::-webkit-scrollbar': {
      bgColor: 'rgba(255,255,255,0)',
      height: '7px',
      width: '7px'
    },
    '&::-webkit-scrollbar-thumb': {
      bgColor: 'rgb(60, 60, 60)',
      br: '$sm',
      height: '7px',
      width: '7px'
    },
    border: 0,
    boxSizing: 'border-box',
    color: 'inherit',
    fontSize: '100%',
    margin: 0,
    padding: 0
  },
  a: { color: 'inherit', textDecoration: 'none' },
  body: { backgroundColor: '$background', color: '$text', lineHeight: 1 },
  'ol, ul': { listStyle: 'none' }
});

export default globalStyles;
