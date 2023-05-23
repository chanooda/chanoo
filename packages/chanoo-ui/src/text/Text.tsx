import * as React from 'react';
import {
  PolymorphicForwardRefExoticComponent,
  PolymorphicRef,
  VariantProps,
  styled,
  fontStyle,
  fontStyleElement,
  FontStyleKey,
  PolymorphicPropsWithRef
} from '../system';

export const StyledText = styled('p', {
  mt: '',
  variants: {
    fontType: { ...fontStyle },
    textAlign: {
      center: {
        textAlign: 'center'
      },
      left: {
        textAlign: 'left'
      },
      right: {
        textAlign: 'right'
      }
    }
  }
});

export type StyledTextProps = VariantProps<typeof StyledText>;

export type TextProps<T extends React.ElementType = 'p'> = PolymorphicPropsWithRef<
  StyledTextProps,
  T
>;

const Text: PolymorphicForwardRefExoticComponent<StyledTextProps, 'p'> = React.forwardRef(
  <T extends React.ElementType = 'p'>(
    {
      as,
      textAlign = 'left',
      fontType = 'text',
      children,
      ...props
    }: PolymorphicPropsWithRef<StyledTextProps, T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    const covertAs = as || fontStyleElement[fontType as FontStyleKey]?.element;
    const childrenWithProps = React.Children.map(children, (child) => {
      // Checking isValidElement is the safe way and avoids a
      // typescript error too.
      if (React.isValidElement(child)) {
        if (child?.type?.displayName === 'Text' && !child.props.as) {
          return React.cloneElement(child, { as: 'span' });
        }
        return React.cloneElement(child);
      }
      return child;
    });

    return (
      <StyledText as={covertAs} fontType={fontType} ref={ref} textAlign={textAlign} {...props}>
        {childrenWithProps}
      </StyledText>
    );
  }
);

Text.displayName = 'Text';

export default Text;
