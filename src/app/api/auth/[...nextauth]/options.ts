import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { compare, hash } from 'bcrypt';

const prisma = new PrismaClient();

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Enter username',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter password',
        },
      },

      async authorize(credentials) {
        try {
          if (!credentials?.username || !credentials.password) {
            return null;
          }

          const user = await prisma.user.findUnique({
            where:{
              username: credentials.username
            }
          })

          if (!user) return null;

          const isPasswordAdmin = await compare(
            credentials.password,
            user.password
          );

          if (!isPasswordAdmin) return null;

          return {
            id: user.id + '',
            name: user.username,
            email: user.email,
            role: user.role
          }

        } catch (e) {
          return null
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks:{
    session({session, token}){
      return{
        ...session,
        user:{
          ...session.user,
          role: token.role
        }
      }
    },

    jwt({token, user}){
      if(user && user.role){
        return {
          ...token,
          name: user.name,
          role: user.role
        }
      }
      return token
    } 
  }
  , 
  pages:{
    signIn: '/api/auth/login',
    error: 'api/auth/error'
  },

}
