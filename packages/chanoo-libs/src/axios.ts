import axios, { CreateAxiosDefaults } from 'axios';

const createDefaultClient = (
  baseURL: string,
  accessToken?: string,
  config?: CreateAxiosDefaults<any>
) => {
  const defaultClient = axios.create({
    baseURL,
    ...config
  });
  defaultClient.defaults.headers.common.Authorization = accessToken || '';
  return defaultClient;
};

export default createDefaultClient;
