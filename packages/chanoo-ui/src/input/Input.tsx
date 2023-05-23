import { ReactNode, forwardRef, ComponentProps } from 'react';
import { CSSProperties } from '@stitches/react';
import {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithRef,
  PolymorphicRef,
  VariantProps,
  spaceStyle,
  styled
} from '../system';
import Col from '../col/Col';
import Label from '../label/Label';
import Text from '../text/Text';

export const StyledInput = styled('input', {
  variants: {
    ...spaceStyle,
    size: {
      xs: { px: '$2', py: '$2', br: '$xs' },
      sm: { px: '$2', py: '$3', br: '$xs' },
      md: { px: '$3', py: '$4', br: '$xs' },
      lg: { px: '$4', py: '$5', br: '$xs' },
      xl: { px: '$4', py: '$6', br: '$xs' }
    }
  },
  w: '$full',
  '&:focus': {
    outline: 'none',
    border: '1px solid $primary'
  },
  outline: 'none',
  border: '1px solid $gray500'
});

export interface DataListOption {
  text?: string;
  value: ComponentProps<'option'>['value'];
}

export type StyledInputProps = VariantProps<typeof StyledInput> & {
  datalistOption?: DataListOption[];
  fullWidth?: boolean;
  label?: ReactNode;
  labelWidth?: CSSProperties['width'];
  oneLineLabel?: boolean;
};

export type InputProps<T extends React.ElementType = 'input'> = PolymorphicPropsWithRef<
  StyledInputProps,
  T
>;

const Input: PolymorphicForwardRefExoticComponent<InputProps, 'input'> = forwardRef(
  <T extends React.ElementType = 'input'>(
    {
      size = 'md',
      label,
      labelWidth,
      oneLineLabel = false,
      fullWidth = true,
      name,
      children,
      datalistOption,
      ...props
    }: InputProps<T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    return (
      <Col
        gap="4"
        w={fullWidth ? 'full' : 'max'}
        css={{
          ...(oneLineLabel && {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
          }),
          '& > label': { whiteSpace: 'nowrap' }
        }}
      >
        <Label css={{ width: labelWidth }} htmlFor={name}>
          <Text fontType="caption">{label}</Text>
        </Label>
        <StyledInput
          autoComplete="off"
          id={name}
          name={name}
          size={size}
          {...(datalistOption && { list: `${name}-list` })}
          {...props}
          ref={ref}
        />
        {datalistOption && (
          <datalist id={`${name}-list`}>
            {datalistOption.map((option, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={`${option.value}-${index}`} value={option.value}>
                {option.text}
              </option>
            ))}
          </datalist>
        )}
      </Col>
    );
  }
);

Input.displayName = 'Input';
export default Input;
