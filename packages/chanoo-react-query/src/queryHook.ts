import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { AxiosError, AxiosResponse } from 'axios';

export function useData<Res, Req>(
  key: [string, Req],
  // eslint-disable-next-line no-unused-vars
  api: (query: Req) => Promise<AxiosResponse<Res>>,
  option: UseQueryOptions<AxiosResponse<Res>, AxiosError<undefined>, Res, [string, Req]> = {}
) {
  const { onError, ...options } = option;
  const { refetch, ...useMutations } = useQuery<
    AxiosResponse<Res>,
    AxiosError<undefined>,
    Res,
    [string, Req]
  >(key, () => api(key[1]), {
    retry: false,
    select(res) {
      return res?.data;
    },
    onError(err) {
      if (onError) onError(err);
    },
    ...options
  });
  return { refetch, ...useMutations };
}

export function useSendData<Res, Req>(
  // eslint-disable-next-line no-unused-vars
  api: (data: Req) => Promise<AxiosResponse<Res>>,
  option: UseMutationOptions<AxiosResponse<Res>, AxiosError<undefined>, Req> = {}
) {
  const { onError, ...options } = option;
  const { mutate, ...useMutations } = useMutation<AxiosResponse<Res>, AxiosError<undefined>, Req>(
    api,
    {
      retry: false,
      onMutate() {},
      onSuccess() {},
      onError(err, variables, context) {
        if (onError) onError(err, variables, context);
      },
      ...options
    }
  );
  return { mutate, ...useMutations };
}
