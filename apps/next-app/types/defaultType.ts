import { AxiosResponse } from 'chanoo-libs';

export interface DefaultRes<T> {
  data: T;
  message: string;
  status: number;
}

export type FullRes<T> = AxiosResponse<DefaultRes<T>>;

export interface SeriesRes {
  id: number;
  name: string;
}

export interface TagsRes {
  id: number;
  name: string;
}
