/* eslint-disable prettier/prettier */
/* eslint-disable turbo/no-undeclared-env-vars */
import React, { MouseEventHandler, useState, useContext } from 'react';
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
  DeleteObjectCommand,
  DeleteObjectCommandInput,
  ListObjectsCommand,
  ListObjectsCommandInput,
  _Object
} from '@aws-sdk/client-s3';
import AddFolder from './AddFolder';
import AddImage from './AddImage';
import { DefaultRes } from '../../types/defaultType';
import { getFolders, getRootFolders } from '../../libs/client/folderApi';
import awsCient from '../../libs/client/awsClient';
import { cashImagesContext } from '../../libs/client/imagesCashContext';
import { FoldersRes, currentImagesContext } from '../../libs/client/currentImageContext';

interface SideFolderImageProps {
  image: _Object;
  type: 'sideBar' | 'page';
}
export function FolderImage({ image, type }: SideFolderImageProps) {
  const { changeCashImages } = useContext(cashImagesContext);
  const { currentImage, changeCurrentImage } = useContext(currentImagesContext);
  const imageUrl = `${process.env.NEXT_PUBLIC_CHANOO_AWS_S3_URL}${image.Key}`;
  const folderName = image.Key?.split('/')[0];

  const copyMarkDownImageUrl = (imageUrlArg: string) => {
    navigator.clipboard.writeText(imageUrlArg);
  };

  const handleImageClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.button === 2) {
      changeCurrentImage(image);
    } else {
      changeCurrentImage();
      copyMarkDownImageUrl(`![](${imageUrl})`);
    }
  };

  const handleClickBigSizeOption = (imageUrlArg: string) => {
    window.open(imageUrlArg);
  };

  const handleClickDeleteImageOption = async (imageKey?: string) => {
    if (imageKey) {
      const input: DeleteObjectCommandInput = {
        Bucket: process.env.NEXT_PUBLIC_CHANOO_AWS_S3_BUCKET_NAME,
        Key: imageKey
      };
      const command = new DeleteObjectCommand(input);
      const response = await awsCient.send(command);
      if (response.$metadata.httpStatusCode === 204) {
        if (folderName) changeCashImages(folderName);
      }
    }
  };

  return (
    <>
      {type === 'sideBar' && (
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
          {currentImage?.Key === image.Key && (
            <Col
              as="ul"
              gap="4"
              css={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, 0%)',
                w: '$24',
                p: '$4',
                bgColor: '$white',
                border: `1px solid $primary`,
                borderRadius: '$sm',
                cursor: 'pointer',
                zIndex: '$10'
              }}
            >
              <Box
                aria-hidden
                as="li"
                w="full"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={() => {
                  handleClickBigSizeOption(imageUrl);
                }}
              >
                크게 보기
              </Box>
              <Box
                aria-hidden
                as="li"
                w="full"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={() => {
                  handleClickDeleteImageOption(image.Key);
                }}
              >
                삭제
              </Box>
            </Col>
          )}
        </Box>
      )}
      {type === 'page' && (
        <Col
          css={{ border: `1px solid $primary`, br: '$md', position: 'relative' }}
          h="32"
          p="4"
          w="52"
          onContextMenu={(e) => e.preventDefault()}
          onMouseDown={handleImageClick}
        >
          <Image
            css={{ objectFit: 'contain' }}
            h="full"
            src={`${process.env.NEXT_PUBLIC_CHANOO_AWS_S3_URL}${image.Key}`}
            w="full"
          />
          {currentImage?.Key === image.Key && (
            <Col
              as="ul"
              gap="4"
              css={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, 0%)',
                w: '$24',
                p: '$4',
                bgColor: '$white',
                border: `1px solid $primary`,
                borderRadius: '$sm',
                cursor: 'pointer',
                zIndex: '$10'
              }}
            >
              <Box
                aria-hidden
                as="li"
                w="full"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={() => {
                  handleClickBigSizeOption(imageUrl);
                }}
              >
                크게 보기
              </Box>
              <Box
                aria-hidden
                as="li"
                w="full"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={() => {
                  handleClickDeleteImageOption(image.Key);
                }}
              >
                삭제
              </Box>
            </Col>
          )}
        </Col>
      )}
    </>
  );
}

interface SideFolderProps {
  folder: FoldersRes;
}
function SideFolder({ folder }: SideFolderProps) {
  const { cashImages, changeCashImages } = useContext(cashImagesContext);
  const { changeCurrentImage, changeCurrentFolder, currentFolder } =
    useContext(currentImagesContext);

  const { data: rootChildFolder } = useSWR<AxiosResponse<DefaultRes<FoldersRes>>>(
    !cashImages[folder.name] && currentFolder && currentFolder.id === folder.id
      ? `/api/folders/${folder.id}`
      : null,
    () => getFolders({ id: Number(folder.id) }),
    {
      onSuccess: async (res) => {
        const input: ListObjectsCommandInput = {
          Bucket: process.env.NEXT_PUBLIC_CHANOO_AWS_S3_BUCKET_NAME || '',
          Prefix: res.data.data.name
        };
        const command = new ListObjectsCommand(input);
        const response = await awsCient.send(command);
        if (response.Contents) {
          changeCashImages(folder.name, response.Contents);
        }
      }
    }
  );

  const onClickFolder = () => {
    if (currentFolder && currentFolder.id === folder.id) {
      changeCurrentFolder();
      changeCurrentImage();
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
      {currentFolder?.id === folder.id &&
        cashImages &&
        cashImages[folder.name] &&
        (cashImages[folder.name] as any)?.length > 0 && (
          <Row
            css={{ flexWrap: 'wrap' }}
            gap="10"
            horizontal="start"
            mt="4"
            vertical="center"
            w="full"
          >
            {rootChildFolder?.data?.data?.child?.map((childFolder) => (
              <SideFolder folder={childFolder} key={childFolder.id} />
            ))}
            {cashImages[folder.name]?.map((image) => (
              <FolderImage image={image} key={image.Key} type="sideBar" />
            ))}
          </Row>
        )}
    </Col>
  );
}

export default function SideFolders() {
  const [sideBarshow, setSideBarshow] = useState(false);

  const { data: rootFolders } = useSWR<AxiosResponse<DefaultRes<FoldersRes[]>>>(
    '/api/folders',
    getRootFolders,
    {
      onSuccess: async () => {
        const input: ListObjectsCommandInput = {
          Bucket: process.env.NEXT_PUBLIC_CHANOO_AWS_S3_BUCKET_NAME || '',
          Prefix: ''
        };
        const command = new ListObjectsCommand(input);
        await awsCient.send(command);
      }
    }
  );

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
              <AddImage />
            </Col>
            <Col gap={2} w="full">
              {rootFolders?.data?.data?.map((folder) => (
                <SideFolder folder={folder} key={folder.id} />
              ))}
            </Col>
          </Col>
        </Col>
      )}
    </Col>
  );
}
