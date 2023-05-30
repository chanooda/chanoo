import React, { ReactNode } from 'react';
import { Noto_Sans_KR } from 'next/font/google';
import { Col, Row, Text } from 'chanoo-ui';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NotoSansKR = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin']
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useRouter();

  return (
    <Col className={NotoSansKR.className} css={{ overflow: 'auto', minHeight: 0 }} h="screen">
      <Row gap="7" h="16" horizontal="center" px="4" w="full">
        <Link href="/">
          <Text {...(pathname === '/' && { color: 'primary' })}>Write</Text>
        </Link>
        <Link href="/folders">
          <Text
            {...((pathname === '/folders' || pathname === '/folders/[id]') && { color: 'primary' })}
          >
            folder
          </Text>
        </Link>
      </Row>
      <Col css={{ flex: 1, minH: 0 }} h="full" w="full">
        {children}
      </Col>
    </Col>
  );
}
