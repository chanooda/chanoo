import { S3Client } from '@aws-sdk/client-s3';

/* eslint-disable turbo/no-undeclared-env-vars */
const awsCient = new S3Client({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_CHANOO_AWS_S3_ACCESS_KEY || '',
    secretAccessKey: process.env.NEXT_PUBLIC_CHANOO_AWS_S3_SECRET_ACCESS_KEY || ''
  }
});

export default awsCient;
