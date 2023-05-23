import React, {
  forwardRef,
  ReactNode,
  CSSProperties,
  useState,
  ComponentProps,
  useRef,
  useCallback
} from 'react';
import { useOnClickOutside } from 'chanoo-libs';
import {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithRef,
  PolymorphicPropsWithoutRef,
  PolymorphicRef,
  VariantProps,
  styled
} from '../system';
import Option from './Option';
import Label from '../label/Label';
import Col, { StyledCol } from '../col/Col';

export const StyledSelectCover = styled(StyledCol, {
  variants: {
    size: {
      xs: { px: '$2', py: '$2', br: '$xs' },
      sm: { px: '$2', py: '$3', br: '$xs' },
      md: { px: '$3', py: '$4', br: '$xs' },
      lg: { px: '$4', py: '$5', br: '$xs' },
      xl: { px: '$4', py: '$6', br: '$xs' }
    },
    showSelectOption: {
      true: {
        borderRadius: '$xs $xs 0px 0px',
        borderBottom: 'none'
      }
    }
  },
  '&:focus': {
    outline: 'none',
    border: '1px solid $primary'
  },
  w: '$full',
  border: '1px solid $gray500',
  cursor: 'pointer'
});

export const StyledSelectOptionsCover = styled('ul', {
  variants: {
    size: {
      xs: { px: '$2', py: '$2' },
      sm: { px: '$2', py: '$3' },
      md: { px: '$3', py: '$4' },
      lg: { px: '$4', py: '$5' },
      xl: { px: '$4', py: '$6' }
    }
  },
  width: '$full',
  maxHeight: '200px',
  overflow: 'auto',
  borderRadius: '0px 0px $xs $xs',
  border: '1px solid $gray500',
  position: 'absolute',
  top: '100%',
  borderTop: 'none',
  backgroundColor: '$background',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
});

export const StyledSelect = styled('select', {
  display: 'none'
});

export type StyledSelectProps = VariantProps<typeof StyledSelect> & {
  fullWidth?: boolean;
  label?: ReactNode;
  labelWidth?: CSSProperties['width'];
  oneLineLabel?: boolean;
} & VariantProps<typeof StyledSelectCover>;

export type SelectProps<T extends React.ElementType = 'select'> = PolymorphicPropsWithRef<
  StyledSelectProps,
  T
>;

export interface CoverOption {
  selected?: boolean;
  text: string;
  value: ComponentProps<'option'>['value'];
}

const SelectMain: PolymorphicForwardRefExoticComponent<SelectProps, 'select'> = forwardRef(
  <T extends React.ElementType = 'select'>(
    {
      fullWidth = false,
      size = 'md',
      children,
      label,
      labelWidth,
      oneLineLabel,
      name,
      ...props
    }: PolymorphicPropsWithoutRef<SelectProps, T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    const coverOptionList: CoverOption[] = [];
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child?.type === Option) {
        coverOptionList.push({
          value: child.props.value,
          text: child.props.children,
          selected: child.props.selected
        });
      }
    });
    const selectedValue = coverOptionList.filter((el) => el.selected);
    const [showSelectOption, setShowSelectOption] = useState(false);
    const [currentVal, setCurrentVal] = useState(
      selectedValue[0] || coverOptionList[0] || { value: '', text: '' }
    );
    const selectRef = useRef(null);

    const handleClickOutside = useCallback(() => {
      setShowSelectOption(false);
    }, []);

    const handleClickOption = (option: CoverOption) => {
      setCurrentVal({ value: option.value, text: option.text });
      setShowSelectOption(false);
    };

    useOnClickOutside(selectRef, handleClickOutside);

    return (
      <Col
        gap="4"
        ref={selectRef}
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
          {label}
        </Label>
        <Col css={{ position: 'relative' }} w="full">
          <StyledSelectCover
            showSelectOption={showSelectOption}
            size={size}
            onClick={() => setShowSelectOption(true)}
          >
            {currentVal.text}
          </StyledSelectCover>
          {showSelectOption && (
            <StyledSelectOptionsCover size={size}>
              {coverOptionList.map((option) => (
                <Col
                  as="li"
                  css={{ width: '$full', cursor: 'pointer' }}
                  key={option.value as string | number}
                  onClick={() => handleClickOption(option)}
                >
                  {option.text}
                </Col>
              ))}
            </StyledSelectOptionsCover>
          )}
        </Col>
        <StyledSelect id={name} {...props} ref={ref}>
          {children}
        </StyledSelect>
      </Col>
    );
  }
);

SelectMain.displayName = 'SelectMain';

const Select = Object.assign(SelectMain, {
  Option
});
Select.Option = Option;
Select.displayName = 'Select';

export default Select;
