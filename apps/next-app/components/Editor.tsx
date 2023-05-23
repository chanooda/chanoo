import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import React, { useState, useContext } from 'react';
import { Box, Button, Col, Input, Modal, Select, Text } from 'chanoo-ui';
import { EditorContext, PreviewType, commands } from '@uiw/react-md-editor';
import dynamic from 'next/dynamic';
import { useForm } from 'chanoo-libs';

const DynamicEditor = dynamic(() => import('@uiw/react-md-editor'));

interface UploadProps {
  onClick?: () => void;
}

function Upload({ onClick }: UploadProps) {
  return (
    <Box as="button" type="button" onClick={onClick}>
      작성하기
    </Box>
  );
}

function ViewButton() {
  const { preview, dispatch } = useContext(EditorContext);
  const onClickHandler = (val: PreviewType) => {
    dispatch?.({
      preview: val
    });
  };
  if (preview === 'live') {
    return (
      <Box as="button" type="button" onClick={() => onClickHandler('edit')}>
        {commands.codeLive.icon}
      </Box>
    );
  }
  if (preview === 'edit') {
    return (
      <Box as="button" type="button" onClick={() => onClickHandler('preview')}>
        {commands.codeEdit.icon}
      </Box>
    );
  }
  if (preview === 'preview') {
    return (
      <Box as="button" type="button" onClick={() => onClickHandler('live')}>
        {commands.codePreview.icon}
      </Box>
    );
  }
  return <Box />;
}

interface UploadForm {
  category: string;
  title: string;
}

export default function Editor() {
  const [editorValue, setEditorValue] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const { register, handleSubmit } = useForm<UploadForm>();

  const upload = {
    icon: <Upload onClick={() => setShowUploadModal(true)} />,
    keyCommand: 'upload',
    name: 'upload',
    value: 'upload'
  };

  const viewButton = {
    icon: <ViewButton />,
    keyCommand: 'upload',
    name: 'upload',
    value: 'upload'
  };

  const onChangeValue = (val?: string) => {
    setEditorValue(val || '');
  };

  const CloseButtonClickHandler = () => {
    setShowUploadModal(false);
  };

  const handleUploadSubmit = handleSubmit(
    (data) => {
      console.log(data);
    },
    () => {}
  );

  return (
    <Box
      css={{ '& > .w-md-editor': { height: '100% !important', zIndex: '300 !important' } }}
      data-color-mode="light"
      h="screen"
      w="screen"
    >
      {showUploadModal && (
        <Modal
          closeButtonClickHandler={CloseButtonClickHandler}
          css={{ maxWidth: '600px', width: '95%' }}
        >
          <Col as="form" gap="14" horizontal="center" w="full" onSubmit={handleUploadSubmit}>
            <Text fontType="header3">작성하기</Text>
            <Col gap="12" w="full">
              <Input
                label="제목"
                placeholder="제목을 입력해주세요."
                size="md"
                {...register('title')}
              />
              {/* <Select
                fullWidth
                label="카테고리"
                {...register('category', {
                  value: '',
                  onChange(event) {
                    const { selectValue } = event.target;
                    setValue('category', selectValue);
                  }
                })}
              >
                <Select.Option value="">선택</Select.Option>
                <Select.Option value="1">테스트</Select.Option>
              </Select> */}
              <Input
                label="카테고리"
                placeholder="카테고리를 입력해주세요."
                size="md"
                {...register('category')}
                datalistOption={[
                  { value: 'react', text: 'react' },
                  { value: 'nextjs', text: 'nextjs' }
                ]}
              />
            </Col>
            <Button fullWidth type="submit">
              확인
            </Button>
          </Col>
        </Modal>
      )}
      <DynamicEditor
        extraCommands={[viewButton, commands.divider, upload]}
        fullscreen
        value={editorValue}
        onChange={onChangeValue}
      />
    </Box>
  );
}
