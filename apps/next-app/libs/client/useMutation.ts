import { useState } from 'react';

export interface UseMutationState<Res> {
  data?: Res;
  error?: unknown;
  loading?: boolean;
}

export type UseMutationResult<Req, Res> = {
  mutate: Mutate<Req, Res>;
  state: UseMutationState<Res>;
};

interface MutateArgs<Req, Res> {
  onError?: (err: any) => void;
  onSuccess?: (res?: Res) => void;
}
type Mutate<Req, Res> = (req: Req, options?: MutateArgs<Req, Res>) => void;

export default function useMutation<Req, Res>(
  url: string,
  method: 'POST' | 'DELETE' | 'PATCH' = 'POST'
): UseMutationResult<Req, Res> {
  const [state, setState] = useState<UseMutationState<Res>>({
    data: undefined,
    error: undefined,
    loading: false
  });
  const mutate: Mutate<Req, Res> = async (req, options) => {
    setState((prevState) => ({ ...prevState, loading: true }));
    try {
      const res = await fetch(url, {
        body: JSON.stringify(req),
        headers: {
          'Content-Type': 'application/json'
        },
        method
      });
      if (!res.ok) {
        if (options?.onError) options?.onError(res);
      }
      const data = await res.json();
      if (data) {
        setState((prevState) => ({ ...prevState, data }));
        if (options?.onSuccess) options?.onSuccess(data);
      }
    } catch (error) {
      setState((prevState) => ({ ...prevState, error }));
    } finally {
      setState((prevState) => ({ ...prevState, loading: false }));
    }
  };
  return { mutate, state };
}
