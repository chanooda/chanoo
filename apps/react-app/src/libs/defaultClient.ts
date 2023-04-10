import createDefaultClient from 'chanoo-libs';

const defaultClient = createDefaultClient(import.meta.env.VITE_API_URL);

export default defaultClient;
