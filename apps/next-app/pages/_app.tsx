import React from 'react';
import type { AppProps } from 'next/app';
import { globalStyles } from 'chanoo-ui';
import { SWRConfig } from 'swr';
import Layout from '../components/admin/Layout';
import CurrentImageContextProvider from '../libs/client/currentImageContext';
import CashImageContextProvider from '../libs/client/imagesCashContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false
      }}
    >
      <CurrentImageContextProvider>
        <CashImageContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CashImageContextProvider>
      </CurrentImageContextProvider>
    </SWRConfig>
  );
}
