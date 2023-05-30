import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var, vars-on-top
  var prisma: PrismaClient;
}

const prisma = global.prisma || new PrismaClient();

// eslint-disable-next-line turbo/no-undeclared-env-vars
if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export default prisma;
