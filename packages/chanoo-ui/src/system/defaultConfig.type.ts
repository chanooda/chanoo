import { CSSProperties } from '@stitches/react';
import { RemoveIndex } from '@stitches/react/types/stitches';

export type FValue = `${Extract<RemoveIndex<CSSProperties['justifyContent']>, string>} ${Extract<
  RemoveIndex<CSSProperties['alignItems']>,
  string
>}`;
