/* eslint-disable turbo/no-undeclared-env-vars */
import React, { useContext } from 'react';
import { Col, Row, AiOutlineFolder, theme } from 'chanoo-ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AddImage from '../../../components/admin/AddImage';
import AddFolder from '../../../components/admin/AddFolder';
import { currentImagesContext } from '../../../libs/client/currentImageContext';
import { FolderImage } from '../../../components/admin/SideFolders';
import { useGetImages } from '../../../libs/client/useGetImages';
import { cashImagesContext } from '../../../libs/client/imagesCashContext';

export default function Index() {
  const id = useRouter().query?.id as string;

  const { currentFolder } = useContext(currentImagesContext);
  const { cashImages } = useContext(cashImagesContext);

  useGetImages(id);

  return (
    <Col css={{ position: 'relative' }} h="full" p="4" w="full">
      <Row css={{ flexWrap: 'wrap', minH: 'full' }} gap="10" w="full">
        <Col h="32" vertical="space-between" w="52">
          <AddImage />
          <AddFolder />
        </Col>
        <Link href={`/folders/${currentFolder?.parentId ? currentFolder?.parentId : ''}`}>
          <Col
            css={{ border: `1px solid $primary`, br: '$md' }}
            h="32"
            horizontal="center"
            vertical="center"
            w="52"
          >
            <AiOutlineFolder color={theme.colors.primary.value} size="50%" />
            이전
          </Col>
        </Link>
        {currentFolder?.child.map((folder) => (
          <Link href={`/folders/${folder?.id}`} key={folder?.id}>
            <Col
              css={{ border: `1px solid $primary`, br: '$md' }}
              h="32"
              horizontal="center"
              vertical="center"
              w="52"
            >
              <AiOutlineFolder color={theme.colors.primary.value} size="50%" />
              {folder?.name}
            </Col>
          </Link>
        ))}
        {currentFolder &&
          cashImages[currentFolder?.name] &&
          cashImages[currentFolder?.name]?.map((image) => (
            <FolderImage image={image} key={image.Key} type="page" />
          ))}
      </Row>
    </Col>
  );
}
