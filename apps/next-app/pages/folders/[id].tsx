/* eslint-disable turbo/no-undeclared-env-vars */
import React, { useState } from 'react';
import { Col, Row, AiOutlineFolder, theme, Image, Text } from 'chanoo-ui';
import Link from 'next/link';
import { AxiosResponse } from 'chanoo-libs';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { ListObjectsCommand, ListObjectsCommandInput, ListObjectsOutput } from '@aws-sdk/client-s3';
import { DefaultRes } from '../../types/defaultType';
import AddImage from '../../components/AddImage';
import AddFolder from '../../components/AddFolder';
import { getChlidFolders } from '../../libs/client/folderApi';
import awsCient from '../../libs/client/awsClient';

export interface FolderRes {
  id: number;
  name: string;
  parentId: null | number;
}

export interface FoldersRes {
  child: FolderRes[];
  id: number;
  name: string;
  parentId: null | number;
}

export default function Index() {
  const id = useRouter().query?.id as string;

  const [images, setImages] = useState<ListObjectsOutput['Contents']>([]);

  const { data: currentFolder, error } = useSWR<AxiosResponse<DefaultRes<FoldersRes>>>(
    id ? `/api/folders/${id}` : null,
    () => getChlidFolders({ id: Number(id) }),
    {
      onSuccess: async (res) => {
        const input: ListObjectsCommandInput = {
          Bucket: process.env.NEXT_PUBLIC_CHANOO_AWS_S3_BUCKET_NAME || '',
          Prefix: res.data.data.name
        };
        const command = new ListObjectsCommand(input);
        const response = await awsCient.send(command);
        if (response.Contents) {
          setImages(response.Contents);
        }
      }
    }
  );

  return (
    <Col css={{ position: 'relative' }} h="full" p="4" w="full">
      <Row css={{ flexWrap: 'wrap', minH: 'full' }} gap="10" w="full">
        <Col h="32" vertical="space-between" w="52">
          <AddImage currentFolderName={currentFolder?.data?.data?.name} />
          <AddFolder />
        </Col>
        <Link
          href={`/folders/${
            currentFolder?.data?.data?.parentId ? currentFolder?.data?.data?.parentId : ''
          }`}
        >
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
        {currentFolder?.data?.data?.child?.map((folder) => (
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
        {images?.map((image) => (
          <a
            href={`${process.env.NEXT_PUBLIC_CHANOO_AWS_S3_URL}${image.Key}`}
            key={image.Key}
            rel="noreferrer noopener"
            target="_blank"
          >
            <Col css={{ border: `1px solid $primary`, br: '$md' }} h="60" p="4" w="80">
              <Text>{}</Text>
              <Image
                css={{ objectFit: 'contain' }}
                h="full"
                src={`${process.env.NEXT_PUBLIC_CHANOO_AWS_S3_URL}${image.Key}`}
                w="full"
              />
            </Col>
          </a>
        ))}
      </Row>
    </Col>
  );
}
