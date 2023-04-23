import { forwardRef } from 'react';
import {
  VariantProps,
  styled,
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicRef
} from '../system';
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

export type StyledRowProps = VariantProps<typeof StyledRow>;

export type RowProps<T extends React.ElementType> = PolymorphicPropsWithoutRef<StyledRowProps, T>;

const Row: PolymorphicForwardRefExoticComponent<StyledRowProps, 'div'> = forwardRef(
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

export default Row;

Row.displayName = 'Row';
