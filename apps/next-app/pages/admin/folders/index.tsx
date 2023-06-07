/* eslint-disable turbo/no-undeclared-env-vars */
import React from 'react';
import { Col, Row, AiOutlineFolder, theme } from 'chanoo-ui';
import { ListObjectsCommand, ListObjectsCommandInput } from '@aws-sdk/client-s3';
import Link from 'next/link';
import useSWR from 'swr';
import { AxiosResponse } from 'chanoo-libs';
import { DefaultRes } from '../../../types/defaultType';
import { getRootFolders } from '../../../libs/client/folderApi';
import AddFolder from '../../../components/admin/AddFolder';
import awsCient from '../../../libs/client/awsClient';
import AddImage from '../../../components/admin/AddImage';
import { FoldersRes } from '../../../libs/client/currentImageContext';

export default function Index() {
  const { data } = useSWR<AxiosResponse<DefaultRes<FoldersRes[]>>>('/api/folders', getRootFolders, {
    onSuccess: async () => {
      const input: ListObjectsCommandInput = {
        Bucket: process.env.NEXT_PUBLIC_CHANOO_AWS_S3_BUCKET_NAME || '',
        Prefix: ''
      };
      const command = new ListObjectsCommand(input);
      await awsCient.send(command);
    }
  });

  return (
    <Col css={{ position: 'relative' }} h="full" p="4" w="full">
      <Row css={{ flexWrap: 'wrap', minH: 'full' }} gap="10" w="full">
        <Col h="32" vertical="space-between" w="52">
          <AddImage />
          <AddFolder />
        </Col>
        {data?.data?.data?.map((rootFolder) => (
          <Link href={`/folders/${rootFolder?.id}`} key={rootFolder?.id}>
            <Col
              css={{ border: `1px solid $primary`, br: '$md' }}
              h="32"
              horizontal="center"
              vertical="center"
              w="52"
            >
              <AiOutlineFolder color={theme.colors.primary.value} size="50%" />
              {rootFolder?.name}
            </Col>
          </Link>
        ))}
      </Row>
    </Col>
  );
}
