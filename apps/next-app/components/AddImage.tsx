/* eslint-disable turbo/no-undeclared-env-vars */
import { Box, Button, Col, File, Image, Modal, Row, Text } from 'chanoo-ui';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { PutObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3';
import awsCient from '../libs/client/awsClient';

interface AddImageProps {
  currentFolderName?: string;
}

export default function AddImage({ currentFolderName }: AddImageProps) {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [ImageList, setImageList] = useState<FileList>();
  const [imageUrlList, setImageUrlList] = useState<string[]>([]);

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length) {
      const fileArray = Array.from(files);
      fileArray.forEach((file) => {
        setImageUrlList((prev) => [...prev, URL.createObjectURL(file)]);
      });
      setImageList(files);
    }
  };

  const handleCloseUploadModal = () => {
    setImageUrlList([]);
    setShowUploadModal(false);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const promiseList: Promise<unknown>[] = [];
    if (ImageList && ImageList.length) {
      const fileArray = Array.from(ImageList);
      fileArray.forEach((file) => {
        const params: PutObjectCommandInput = {
          Bucket: process.env.NEXT_PUBLIC_CHANOO_AWS_S3_BUCKET_NAME,
          Key: currentFolderName ? `${currentFolderName}/${file.name}` : '',
          Body: file,
          ContentType: file.type,
          ContentDisposition: 'inline'
        };
        const command = new PutObjectCommand(params);
        const imageUploadPormise = awsCient.send(command);
        promiseList.push(imageUploadPormise);
      });
    }
    const res = await Promise.all(promiseList).then(() => {
      handleCloseUploadModal();
    });
  };

  return (
    <>
      <Col h="18" w="full">
        <File as="button" type="button" onClick={() => setShowUploadModal(true)} />
      </Col>
      {showUploadModal && (
        <form onSubmit={onSubmit}>
          <Modal
            closeButtonClickHandler={handleCloseUploadModal}
            css={{ width: '80%', height: '80%' }}
            isGlobal={false}
          >
            <Col css={{ minH: 0 }} gap="10" h="full" horizontal="center" w="full">
              <Row horizontal="center" vertical="center" w="full">
                <Text fontType="header3">이미지 업로드</Text>
              </Row>
              <Col css={{ width: '50%' }} h="18">
                <File
                  accept="image/*"
                  css={{ alignSelf: 'flex-start' }}
                  multiple
                  name="images"
                  onChange={handleChangeImage}
                />
              </Col>
              <Col css={{ overflow: 'auto' }} gap="10" h="full" w="full">
                <Box
                  bgColor=""
                  css={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}
                  gap="10"
                  h="full"
                  w="full"
                >
                  {imageUrlList &&
                    imageUrlList.length > 0 &&
                    // eslint-disable-next-line react/no-array-index-key
                    imageUrlList.map((url) => <Image alt={url} key={url} src={url} w="full" />)}
                </Box>
              </Col>
              <Button fullWidth type="submit">
                업로드
              </Button>
            </Col>
          </Modal>
        </form>
      )}
    </>
  );
}
