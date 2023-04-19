export type RemoveObject<T> = T extends unknown ? (keyof T extends never ? never : T) : never;
export type RemoveIndex<T> = {
  [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};
