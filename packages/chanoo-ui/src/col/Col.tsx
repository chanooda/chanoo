import { forwardRef } from 'react';
import {
  VariantProps,
  styled,
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicRef
} from '../system';
import { StyledBox } from '../box/Box';

export const StyledCol = styled(StyledBox, {
  d: 'flex',
  flexDirection: 'column',
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

export type StyledColProps = VariantProps<typeof StyledCol>;

export type ColumnProps<T extends React.ElementType> = PolymorphicPropsWithoutRef<
  StyledColProps,
  T
>;

const Col: PolymorphicForwardRefExoticComponent<StyledColProps, 'div'> = forwardRef(
  <T extends React.ElementType = 'div'>(
    { children, ...props }: ColumnProps<T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    return (
      <StyledCol {...props} ref={ref}>
        {children}
      </StyledCol>
    );
  }
);

export default Col;

Col.displayName = 'Col';
