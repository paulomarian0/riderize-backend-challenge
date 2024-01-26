import { PrismaClient } from '@prisma/client';

const databaseAdapter = new PrismaClient();

export { databaseAdapter };
