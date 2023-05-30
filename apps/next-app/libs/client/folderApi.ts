import axios from './defaultClient';

export const getRootFolders = () => {
  return axios.get('/folders');
};

interface GetChildFoldersREQ {
  id: number;
}
export const getChlidFolders = (req: GetChildFoldersREQ) => {
  return axios.get(`/folders/${req.id}`);
};

interface AddRootFolderREQ {
  name: string;
}
export const addRootFolder = (req: AddRootFolderREQ) => {
  return axios.post('/folders', req);
};
