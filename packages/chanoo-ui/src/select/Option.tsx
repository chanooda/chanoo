import { forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef, VariantProps, styled } from '../system';

export const StyledOption = styled('option', {});

export type StyledOptionProps = VariantProps<typeof StyledOption>;

export type OptionProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  StyledOptionProps
>;

type OptionComponent = <T extends React.ElementType = 'option'>(
  props: OptionProps<T>
) => React.ReactElement | null;

const Option = forwardRef(
  <T extends React.ElementType = 'option'>(
    { children, ...props }: OptionProps<T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    return (
      <StyledOption {...props} ref={ref}>
        {children}
      </StyledOption>
    );
  }
);

export default Option as OptionComponent;
