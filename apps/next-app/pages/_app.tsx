import React from 'react';
import type { AppProps } from 'next/app';
import { globalStyles } from 'chanoo-ui';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
