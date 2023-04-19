import * as React from 'react';
import {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithRef,
  PolymorphicPropsWithoutRef,
  PolymorphicRef
} from '../system';
import { VariantProps, styled, fontStyle, fontStyleElement, FontStyleKey } from '../theme';

export const StyledText = styled('p', {
  variants: {
    fontType: { ...fontStyle }
  }
});

export type StyledTextProps = VariantProps<typeof StyledText>;

export type TextProps<T extends React.ElementType> = PolymorphicPropsWithRef<StyledTextProps, T>;

const Text: PolymorphicForwardRefExoticComponent<StyledTextProps, 'p'> = React.forwardRef(
  <T extends React.ElementType = 'p'>(
    { as, fontType = 'text', children, ...props }: PolymorphicPropsWithoutRef<StyledTextProps, T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    const covertAs = as || fontStyleElement[fontType as FontStyleKey]?.element;
    const childrenWithProps = React.Children.map(children, (child) => {
      // Checking isValidElement is the safe way and avoids a
      // typescript error too.

      if (React.isValidElement(child)) {
        if (child.type.displayName === 'Text' && !child.props.as) {
          return React.cloneElement(child, { as: 'span' });
        }
        return React.cloneElement(child);
      }
      return child;
    });
    return (
      <StyledText as={covertAs} fontType={fontType} ref={ref} {...props}>
        {childrenWithProps}
      </StyledText>
    );
  }
);

export default Text;

Text.displayName = 'Text';
