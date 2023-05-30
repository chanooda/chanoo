import { Button, Col, Input, Modal, Text } from 'chanoo-ui';
import React, { ChangeEvent, useState } from 'react';
import { useSWRConfig } from 'swr';
import { useRouter } from 'next/router';
import useMutation from '../libs/client/useMutation';

export default function AddFolder() {
  const id = useRouter().query?.id as string;
  const [showAddFolderModal, setShowAddFolderModal] = useState(false);
  const [folderName, setFolderName] = useState('');

  const { mutate: addFolder } = useMutation('/api/folders', 'POST');
  const { mutate } = useSWRConfig();

  const handleChangeFoldeName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFolderName(value);
  };

  const handleCloseAddFolderModal = () => {
    setFolderName('');
    setShowAddFolderModal(false);
  };

  const handleAddFolerButton = () => {
    addFolder(
      { name: folderName, ...(id && { parentId: Number(id) }) },
      {
        onSuccess() {
          if (id) {
            mutate(`/api/folders/${id}`);
          } else {
            mutate('/api/folders');
          }
          handleCloseAddFolderModal();
        }
      }
    );
  };
  return (
    <>
      <Button fullWidth onClick={() => setShowAddFolderModal(true)}>
        폴더 추가
      </Button>
      {showAddFolderModal && (
        <Modal
          closeButtonClickHandler={handleCloseAddFolderModal}
          css={{ maxW: '$96', w: '$full' }}
          isGlobal={false}
        >
          <Col gap="4" horizontal="center" w="full">
            <Text fontType="header4">폴더 만들기</Text>
            <Input value={folderName} onChange={handleChangeFoldeName} />
            <Button
              css={{ alignSelf: 'flex-end' }}
              size="xs"
              type="button"
              onClick={handleAddFolerButton}
            >
              생성
            </Button>
          </Col>
        </Modal>
      )}
    </>
  );
}
