import defaultClient from '../libs/defaultClient';

export const testApi = () => {
  return defaultClient.get('posts');
};
