import { forwardRef } from 'react';
import { VariantProps, styled, PolymorphicRef, PolymorphicComponentProps } from '../system';
import { StyledBox } from '../box/Box';

export const StyledRow = styled(StyledBox, {
  d: 'flex',
  variants: {
    flexC: {
      false: {
        flexCenter: false
      },
      true: {
        flexCenter: true
      }
    },
    horizontal: {
      center: {
        ai: 'center'
      },
      end: {
        ai: 'flex-end'
      },
      start: {
        ai: 'flex-start'
      }
    },
    vertical: {
      center: {
        jc: 'center'
      },
      end: {
        jc: 'flex-end'
      },
      start: {
        jc: 'flex-start'
      }
    }
  }
});

export type StyledRowProps = VariantProps<typeof StyledRow> & VariantProps<typeof StyledBox>;

export type RowProps<T extends React.ElementType> = PolymorphicComponentProps<T, StyledRowProps>;

type RowComponent = <T extends React.ElementType = 'div'>(
  props: RowProps<T>
) => React.ReactElement | null;

const Row = forwardRef(
  <T extends React.ElementType = 'div'>(
    { children, ...props }: RowProps<T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    return (
      <StyledRow {...props} ref={ref}>
        {children}
      </StyledRow>
    );
  }
);

Row.displayName = 'Row';

export default Row as RowComponent;
