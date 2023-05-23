import { forwardRef } from 'react';
import {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithRef,
  PolymorphicPropsWithoutRef,
  PolymorphicRef,
  VariantProps,
  styled
} from '../system';
import { StyledBox } from '../box/Box';

export const StyledCol = styled(StyledBox, {
  alignItems: 'flex-start',
  d: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
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

export type StyledColProps = VariantProps<typeof StyledCol> & VariantProps<typeof StyledBox>;

export type ColProps<T extends React.ElementType = 'div'> = PolymorphicPropsWithRef<
  StyledColProps,
  T
>;

const Col: PolymorphicForwardRefExoticComponent<ColProps, 'div'> = forwardRef(
  <T extends React.ElementType = 'div'>(
    { children, ...props }: PolymorphicPropsWithoutRef<ColProps, T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    return (
      <StyledCol {...props} ref={ref}>
        {children}
      </StyledCol>
    );
  }
);

Col.displayName = 'Col';
export default Col;
