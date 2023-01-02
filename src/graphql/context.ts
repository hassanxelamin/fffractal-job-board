/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../lib/prisma';

export type Context = {
  prisma: PrismaClient;
};

export async function createContext(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Context> {
  return {
    prisma,
  };
}
