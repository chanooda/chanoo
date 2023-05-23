import React, { ReactNode } from 'react';
import { Noto_Sans_KR } from 'next/font/google';

const NotoSansKR = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin']
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className={NotoSansKR.className}>{children}</div>;
}
