import { createDefaultClient } from 'chanoo-libs';

// eslint-disable-next-line turbo/no-undeclared-env-vars
const defaultClient = createDefaultClient(process.env.NEXT_PUBLIC_API_URL || '/api');

export default defaultClient;
