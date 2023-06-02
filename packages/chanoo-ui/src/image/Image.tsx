import { forwardRef } from 'react';
import { VariantProps } from '@stitches/react';
import {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithRef,
  PolymorphicRef,
  sizesStyle,
  styled
} from '../system';

export const StyledImage = styled('img', {
  variants: {
    ...sizesStyle
  },
  display: 'block'
});

export type StyledImageProps = VariantProps<typeof StyledImage>;

export type ImageProps<T extends React.ElementType = 'img'> = PolymorphicPropsWithRef<
  StyledImageProps,
  T
>;

const Image: PolymorphicForwardRefExoticComponent<ImageProps, 'img'> = forwardRef(
  <T extends React.ElementType = 'img'>(
    { ...props }: ImageProps<T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    return <StyledImage {...props} ref={ref} />;
  }
);

Image.displayName = 'Image';
export default Image;
