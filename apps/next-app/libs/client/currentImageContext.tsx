import { createContext, ReactNode, useState, useMemo } from 'react';
import { _Object } from '@aws-sdk/client-s3';

export interface FoldersRes {
  child: FoldersRes[];
  id: number;
  name: string;
  parentId: null | number;
}

export type CurrentImageContextImagesType = Record<string, _Object[] | undefined>;
export interface CurrentImageContextType {
  changeCurrentFolder: (currentFolderArg?: FoldersRes) => void;
  changeCurrentImage: (currentImageArg?: _Object) => void;
  currentFolder?: FoldersRes;
  currentImage?: _Object;
}

const currentImageContextDefaultValue = {
  currentImage: undefined,
  currentFolder: undefined,
  changeCurrentFolder: (currentFolderArg?: FoldersRes) => {},
  changeCurrentImage: (currentImageArg?: _Object) => {}
};

export const currentImagesContext = createContext<CurrentImageContextType>(
  currentImageContextDefaultValue
);

interface ImageContextProviderProps {
  children: ReactNode;
}
function CurrentImageContextProvider({ children }: ImageContextProviderProps) {
  const [currentImage, setCurrentImage] = useState<_Object | undefined>();
  const [currentFolder, setCurrentFolder] = useState<FoldersRes | undefined>();

  const changeCurrentFolder = (currentFolderArg?: FoldersRes) => {
    setCurrentFolder(currentFolderArg);
  };

  const changeCurrentImage = (currentImageArg?: _Object) => {
    setCurrentImage(currentImageArg);
  };

  const currentImageContextValue = useMemo<CurrentImageContextType>(
    () => ({
      currentImage,
      currentFolder,
      changeCurrentFolder,
      changeCurrentImage
    }),
    [currentImage, currentFolder]
  );

  return (
    <currentImagesContext.Provider value={currentImageContextValue}>
      {children}
    </currentImagesContext.Provider>
  );
}

export default CurrentImageContextProvider;
