import { forwardRef } from 'react';
import { VariantProps } from '@stitches/react';
import { PolymorphicComponentProps, PolymorphicRef, styled } from '../system';

export const StyledButton = styled('button', {
  variants: {
    fullWidth: {
      true: {
        w: '$full'
      }
    },
    outline: {
      true: {
        bgColor: '$white',
        border: `1px solid $primary`,
        color: '$primary',
        '&:hover': {
          bgColor: '$primary100'
        },
        '&:active': {
          bgColor: '$primary',
          color: '$white'
        }
      }
    },
    size: {
      xs: {
        br: '$xs',
        fs: '$xs',
        p: '$3'
      },
      sm: {
        br: '$sm',
        fs: '$sm',
        p: '$4'
      },
      md: {
        br: '$sm',
        p: '$5'
      },
      lg: {
        br: '$sm',
        px: '$7',
        py: '$6'
      },
      xl: {
        br: '$sm',
        px: '$8',
        py: '$7'
      }
    }
  },
  '&:focus': {
    bgColor: '$primary400',
    outline: 'none'
  },
  '&:hover': {
    bgColor: '$primary400'
  },
  '&:active': {
    bgColor: '$primary700'
  },
  backgroundColor: '$primary',
  color: '$white',
  cursor: 'pointer',
  flexCenter: true,
  fontSize: '$md',
  fontWeight: '$black'
});

export type StyledButtonProps = VariantProps<typeof StyledButton>;

export type ButtonProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  StyledButtonProps
>;

type ButtonComponent = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T>
) => React.ReactElement | null;

const Button = forwardRef(
  <T extends React.ElementType = 'button'>(
    { size = 'md', children, ...props }: ButtonProps<T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    return (
      <StyledButton size={size} {...props} ref={ref}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button as ButtonComponent;
