import { forwardRef } from 'react';
import {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithRef,
  PolymorphicRef,
  VariantProps,
  sizesStyle,
  spaceStyle,
  styled
} from '../system';

export const StyledBox = styled('div', {
  variants: {
    ...sizesStyle,
    ...spaceStyle
  }
});

export type StyledBoxProps = VariantProps<typeof StyledBox>;

export type BoxProps<T extends React.ElementType> = PolymorphicPropsWithRef<StyledBoxProps, T>;

const Box: PolymorphicForwardRefExoticComponent<StyledBoxProps, 'div'> = forwardRef(
  <T extends React.ElementType = 'div'>(
    { children, ...props }: BoxProps<T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    return (
      <StyledBox {...props} ref={ref}>
        {children}
      </StyledBox>
    );
  }
);

export default Box;

Box.displayName = 'Box';
