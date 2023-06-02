import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';

// utils/vercel-utils.tsx
export const IS_SERVER = typeof window === 'undefined';
export function getProtocol() {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const isProd = process.env.VERCEL_ENV === 'production';
  if (isProd) return 'https://';
  return 'http://';
}

const getAbsoluteUrl = (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
  subUrl: string
) => {
  return `${getProtocol()}${ctx.req.headers.host}/api${subUrl}`;
};

export default getAbsoluteUrl;
