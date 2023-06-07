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

const navList = [
  {
    name: 'Home',
    path: '/admin/'
  },
  {
    name: 'Write',
    path: '/admin/write'
  },
  {
    name: 'Folder',
    path: '/admin/folders'
  }
];

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useRouter();
  const route = pathname.split('/')[2];
  console.log(route);
  return (
    <Col className={NotoSansKR.className} css={{ overflow: 'auto', minHeight: 0 }} h="screen">
      <Row gap="7" h="16" horizontal="center" px="4" w="full">
        {navList.map((nav) => (
          <Link href={nav.path} key={nav.name}>
            <Text {...(route === nav.path.split('/')[2] && { color: 'primary' })}>{nav.name}</Text>
          </Link>
        ))}
      </Row>
      <Col css={{ flex: 1, minH: 0 }} h="full" w="full">
        {children}
      </Col>
    </Col>
  );
}
