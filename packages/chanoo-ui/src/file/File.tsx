import { forwardRef } from 'react';
import {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithRef,
  PolymorphicPropsWithoutRef,
  PolymorphicRef,
  VariantProps,
  styled
} from '../system';
import Text from '../text/Text';
import Col from '../col/Col';

export const StyledFile = styled('input', {
  display: 'none'
});

export type StyledFileProps = VariantProps<typeof StyledFile>;

export type FileProps<T extends React.ElementType = 'input'> = PolymorphicPropsWithRef<
  StyledFileProps,
  T
>;

export const FileCover = styled('div', {
  w: '$full',
  h: '$full',
  br: '$md',
  border: '2px solid $primary',
  cursor: 'pointer',
  flexCenter: true
});

const File: PolymorphicForwardRefExoticComponent<FileProps, 'input'> = forwardRef(
  <T extends React.ElementType = 'input'>(
    { name, ...props }: PolymorphicPropsWithoutRef<FileProps, T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <Col as="label" css={{ w: '$full', h: '$full' }} htmlFor={name}>
        <FileCover>
          <Text color="primary" fontType="header4">
            이미지 추가
          </Text>
        </FileCover>
        <StyledFile id={name} name={name} type="file" {...props} ref={ref} />
      </Col>
    );
  }
);

File.displayName = 'File';
export default File;
