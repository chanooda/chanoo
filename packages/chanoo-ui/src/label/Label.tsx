import { forwardRef } from 'react';
import {
  PolymorphicPropsWithRef,
  PolymorphicRef,
  VariantProps,
  sizesStyle,
  spaceStyle,
  styled
} from '../system';

export const StyledLabel = styled('label', {
  variants: {
    ...sizesStyle,
    ...spaceStyle
  }
});

export type StyledLabelProps = VariantProps<typeof StyledLabel>;

export type LabelProps<T extends React.ElementType> = PolymorphicPropsWithRef<StyledLabelProps, T>;

const Label = forwardRef(
  <T extends React.ElementType = 'label'>(
    { children, ...props }: LabelProps<T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    return (
      <StyledLabel {...props} ref={ref}>
        {children}
      </StyledLabel>
    );
  }
);

export default Label;

Label.displayName = 'Label';
