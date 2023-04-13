import { styled } from '../theme';

const Button = styled('button', {
  backgroundColor: '$primary',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray'
  }
});

export default Button;
