import { createContext, ReactNode, useState, useMemo } from 'react';
import { _Object } from '@aws-sdk/client-s3';

export type CashImageContextImagesType = Record<string, _Object[] | undefined>;
export interface CashImageContextType {
  cashImages: CashImageContextImagesType;
  changeCashImages: (folderName: string, images?: _Object[]) => void;
}

const cashImageContextDefaultValue = {
  cashImages: {},
  changeCashImages(folderName: string, images?: _Object[]) {}
};

export const cashImagesContext = createContext<CashImageContextType>(cashImageContextDefaultValue);

interface CashImageContextProviderProps {
  children: ReactNode;
}
function CashImageContextProvider({ children }: CashImageContextProviderProps) {
  const [cashImages, setCashImages] = useState<CashImageContextImagesType>({});

  const changeCashImages = (folderName: string, imagesArg?: _Object[]) => {
    setCashImages((prev) => ({ ...prev, [folderName]: imagesArg }));
  };

  const imageContextValue = useMemo(
    () => ({
      cashImages,
      changeCashImages
    }),
    [cashImages]
  );

  return (
    <cashImagesContext.Provider value={imageContextValue}>{children}</cashImagesContext.Provider>
  );
}

export default CashImageContextProvider;
