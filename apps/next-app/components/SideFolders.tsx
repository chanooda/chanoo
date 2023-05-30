/* eslint-disable turbo/no-undeclared-env-vars */
import React, { MouseEventHandler, useState } from 'react';
import {
  BsFillArrowRightCircleFill,
  Col,
  BsFillArrowLeftCircleFill,
  AiOutlineFolder,
  Text,
  Row,
  Image,
  Box
} from 'chanoo-ui';
import useSWR from 'swr';
import { AxiosResponse } from 'chanoo-libs';
import {
  ListObjectsCommand,
  ListObjectsCommandInput,
  ListObjectsOutput,
  _Object
} from '@aws-sdk/client-s3';
import AddFolder from './AddFolder';
import AddImage from './AddImage';
import { DefaultRes } from '../types/defaultType';
import { RootFoldersRes } from '../pages/folders';
import { getChlidFolders, getRootFolders } from '../libs/client/folderApi';
import awsCient from '../libs/client/awsClient';
import { FolderRes, FoldersRes } from '../pages/folders/[id]';

interface SideFolderImageProps {
  chooseImageKey?: string;
  handleSetChooseImage: (imageKey?: string) => void;
  image: _Object;
}
function SideFolderImage({ image, handleSetChooseImage, chooseImageKey }: SideFolderImageProps) {
  const imageUrl = `${process.env.NEXT_PUBLIC_CHANOO_AWS_S3_URL}${image.Key}`;

  const copyMarkDownImageUrl = (imageUrlArg: string) => {
    navigator.clipboard.writeText(imageUrlArg);
  };

  const handleImageClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.button === 2) {
      handleSetChooseImage(image.Key);
    } else {
      handleSetChooseImage('');
      copyMarkDownImageUrl(`![](${imageUrl})`);
    }
  };

  const handleClickBigSizeOption = (imageUrlArg: string) => {
    window.open(imageUrlArg);
  };

  return (
    <Box
      css={{
        border: `1px solid $primary`,
        width: '40%',
        br: '$xs',
        position: 'relative',
        h: '$18',
        cursor: 'pointer'
      }}
      onContextMenu={(e) => e.preventDefault()}
      onMouseDown={handleImageClick}
    >
      <Image
        css={{ objectFit: 'contain', w: '$full', h: '$full' }}
        src={`${process.env.NEXT_PUBLIC_CHANOO_AWS_S3_URL}${image.Key}`}
      />
      {chooseImageKey === image.Key && (
        <Col
          as="ul"
          css={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            w: '$24',
            p: '$4',
            bgColor: '$white',
            border: `1px solid $primary`,
            borderRadius: '$sm',
            cursor: 'pointer'
          }}
        >
          <li
            aria-hidden
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => {
              handleClickBigSizeOption(imageUrl);
            }}
          >
            크게 보기
          </li>
        </Col>
      )}
    </Box>
  );
}

interface SideFolderProps {
  changeCurrentFolder: (folder: FolderRes | undefined) => void;
  currentFolder?: FoldersRes;
  folder: RootFoldersRes;
}
function SideFolder({ folder, currentFolder, changeCurrentFolder }: SideFolderProps) {
  const [images, setImages] = useState<ListObjectsOutput['Contents']>([]);
  const [chooseImageKey, setChooseImageKey] = useState<string | undefined>('');

  const handleSetChooseImage = (imageKey?: string) => {
    setChooseImageKey(imageKey);
  };

  const { data: rootChildFolder } = useSWR<AxiosResponse<DefaultRes<FoldersRes>>>(
    currentFolder && currentFolder.id === folder.id ? `/api/folders/${folder.id}` : null,
    () => getChlidFolders({ id: Number(folder.id) }),
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

  const onClickFolder = () => {
    if (currentFolder && currentFolder.id === folder.id) {
      changeCurrentFolder(undefined);
      return;
    }
    changeCurrentFolder(folder);
  };

  return (
    <Col w="full">
      <Row
        gap="2"
        mb="2"
        p="2"
        w="full"
        css={{
          cursor: 'pointer',
          ...(currentFolder?.id === folder.id && {
            bgColor: '$primary',
            color: '$gray100'
          }),
          br: '$xs'
        }}
        onClick={onClickFolder}
      >
        <AiOutlineFolder size="20px" />
        <Text>{folder?.name}</Text>
      </Row>
      {currentFolder?.id === folder.id && images && images?.length > 0 && (
        <Row
          css={{ flexWrap: 'wrap' }}
          gap="10"
          horizontal="start"
          mt="4"
          vertical="center"
          w="full"
        >
          {rootChildFolder?.data?.data?.child?.map((childFolder) => (
            <SideFolder
              changeCurrentFolder={changeCurrentFolder}
              currentFolder={currentFolder}
              folder={childFolder}
              key={childFolder.id}
            />
          ))}
          {images?.map((image) => (
            <SideFolderImage
              chooseImageKey={chooseImageKey}
              handleSetChooseImage={handleSetChooseImage}
              image={image}
              key={image.Key}
            />
          ))}
        </Row>
      )}
    </Col>
  );
}

export default function SideFolders() {
  const [sideBarshow, setSideBarshow] = useState(false);
  const [currentFolder, setCurrentFolder] = useState<FoldersRes | undefined>(undefined);

  const { data: rootFolders } = useSWR<AxiosResponse<DefaultRes<RootFoldersRes[]>>>(
    '/api/folders',
    getRootFolders,
    {
      onSuccess: async (data) => {
        const input: ListObjectsCommandInput = {
          Bucket: process.env.NEXT_PUBLIC_CHANOO_AWS_S3_BUCKET_NAME || '',
          Prefix: ''
        };
        const command = new ListObjectsCommand(input);
        const response = await awsCient.send(command);
      }
    }
  );

  const changeCurrentFolder = (folder: FoldersRes | undefined) => setCurrentFolder(folder);

  const handleClickShowButton = () => {
    setSideBarshow((prev) => !prev);
  };

  return (
    <Col gap="4" h="full" horizontal="end" py="4">
      <Col px="4">
        <Col
          as="button"
          css={{ all: 'unset', cursor: 'pointer' }}
          type="button"
          onClick={handleClickShowButton}
        >
          {!sideBarshow ? <BsFillArrowRightCircleFill /> : <BsFillArrowLeftCircleFill />}
        </Col>
      </Col>
      {sideBarshow && (
        <Col css={{ overflow: 'auto' }} gap="4" w="full">
          <Col gap="10" h="full" p="4" w="60">
            <Col gap="4" w="full">
              <AddFolder />
              <AddImage currentFolderName={currentFolder?.name} />
            </Col>
            <Col gap={2} w="full">
              {rootFolders?.data?.data?.map((folder) => (
                <SideFolder
                  changeCurrentFolder={changeCurrentFolder}
                  currentFolder={currentFolder}
                  folder={folder}
                  key={folder.id}
                />
              ))}
            </Col>
          </Col>
        </Col>
      )}
    </Col>
  );
}
