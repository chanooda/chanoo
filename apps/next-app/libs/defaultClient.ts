import createDefaultClient from 'chanoo-libs';

const defaultClient = createDefaultClient(process.env.NEXT_PUBLIC_API_URL || '');

export default defaultClient;
