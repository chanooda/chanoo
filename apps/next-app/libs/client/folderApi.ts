import axios from './defaultClient';

export const getRootFolders = () => {
  return axios.get('/folders');
};

interface GetChildFoldersREQ {
  id: number;
}
export const getFolders = (req?: GetChildFoldersREQ) => {
  return axios.get(req ? `/folders/${req.id}` : '/folders');
};

interface AddRootFolderREQ {
  name: string;
}
export const addRootFolder = (req: AddRootFolderREQ) => {
  return axios.post('/folders', req);
};
