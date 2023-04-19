import { styled } from '../theme';

const Button = styled('button', {
  all: 'unset',
  backgroundColor: '$primary',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'lightgray'
  }
});

export default Button;
