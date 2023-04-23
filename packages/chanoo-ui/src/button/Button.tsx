import { styled } from '../system';

const Button = styled('button', {
  '&:hover': {
    backgroundColor: 'lightgray'
  },
  all: 'unset',
  backgroundColor: '$primary',
  borderRadius: '9999px',
  cursor: 'pointer',
  fontSize: '13px',
  padding: '10px 15px'
});

export default Button;
