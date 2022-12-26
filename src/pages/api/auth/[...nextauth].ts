/*
 * Next-Auth
 */
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

/*
 * Prisma
 */
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

// Instantiate Prisma Client
const prisma = new PrismaClient();

export const authOptions = {
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/',
    verifyRequest: '/',
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        secure: true,
        auth: {
          user: 'ajpacker619',
          pass: 'whcrguuohpzkymdv',
        },
      },
      from: process.env.EMAIL_FROM,
      maxAge: 10 * 60, // Magic links are valid for 10 min only
    }),
  ],
  adapter: PrismaAdapter(prisma),
};

export default NextAuth(authOptions);
