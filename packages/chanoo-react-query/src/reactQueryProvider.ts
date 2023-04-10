import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

export const getQueryClient = (option?: QueryClientConfig) => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        ...option?.defaultOptions?.queries
      },
      ...option?.defaultOptions
    },
    ...option
  });
};

export { QueryClientProvider } from '@tanstack/react-query';
