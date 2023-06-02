import { useContext } from 'react';
import { ListObjectsCommand, ListObjectsCommandInput } from '@aws-sdk/client-s3';
import useSWR from 'swr';
import { AxiosResponse } from 'chanoo-libs';
import awsCient from './awsClient';
import { DefaultRes } from '../../types/defaultType';
import { FoldersRes, currentImagesContext } from './currentImageContext';
import { getFolders } from './folderApi';
import { cashImagesContext } from './imagesCashContext';

export const useGetImages = (id?: string) => {
  const { changeCashImages, cashImages } = useContext(cashImagesContext);
  const { changeCurrentFolder, currentFolder } = useContext(currentImagesContext);

  const swrKey = id ? `/api/folders/${id}` : `/api/folders`;

  const folderAndImages = useSWR<AxiosResponse<DefaultRes<FoldersRes>>>(
    !cashImages[currentFolder?.name as string] ? swrKey : null,
    () => getFolders(id ? { id: Number(id) } : undefined),
    {
      onSuccess: async (res) => {
        const input: ListObjectsCommandInput = {
          // eslint-disable-next-line turbo/no-undeclared-env-vars
          Bucket: process.env.NEXT_PUBLIC_CHANOO_AWS_S3_BUCKET_NAME,
          Prefix: res.data.data.name
        };
        const command = new ListObjectsCommand(input);
        const response = await awsCient.send(command);

        changeCashImages(res.data.data.name, response.Contents);
        changeCurrentFolder(res.data.data);
      }
    }
  );
  return folderAndImages;
};
