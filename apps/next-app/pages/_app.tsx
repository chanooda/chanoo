import React from 'react';
import type { AppProps } from 'next/app';
import { globalStyles } from 'chanoo-ui';
import { SWRConfig } from 'swr';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
