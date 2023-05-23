import { CSS } from './stitches.config';

// 기존 작성한 ViewProps에서 as를 분리한다.
type AsProp<T extends React.ElementType> = {
  as?: T | React.ElementType;
  css?: CSS;
};

type Merge<T, U> = Omit<T, keyof U> & U;

// 직관적인 이름을 붙여서 타입으로 만들어준다.
export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

// 결합 타입을 만든다.
export type PolymorphicComponentProps<T extends React.ElementType, Props = object> = AsProp<T> &
  Merge<React.ComponentPropsWithoutRef<T>, Props> & {
    ref?: PolymorphicRef<T>;
  };

type PropsWithAs<P, T extends React.ElementType> = P & { as?: T | React.ElementType; css?: CSS };

export type PolymorphicPropsWithoutRef<P, T extends React.ElementType> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? React.PropsWithoutRef<JSX.IntrinsicElements[T]>
    : React.ComponentPropsWithoutRef<T>,
  PropsWithAs<P, T>
>;

export type PolymorphicPropsWithRef<P, T extends React.ElementType> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? React.PropsWithRef<JSX.IntrinsicElements[T]>
    : React.ComponentPropsWithRef<T>,
  PropsWithAs<P, T>
>;

type PolymorphicExoticComponent<
  P = object,
  T extends React.ElementType = React.ElementType
> = Merge<
  React.ExoticComponent<P & { [key: string]: unknown }>,
  {
    /**
     * **NOTE**: Exotic components are not callable.
     */
    <InstanceT extends React.ElementType = T>(
      props: PolymorphicPropsWithRef<P, InstanceT>
    ): React.ReactElement | null;
  }
>;
export type PolymorphicForwardRefExoticComponent<P, T extends React.ElementType> = Merge<
  React.ForwardRefExoticComponent<P & { [key: string]: unknown }>,
  PolymorphicExoticComponent<P, T>
>;
