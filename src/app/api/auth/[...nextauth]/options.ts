import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


export const options : NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name: 'Credentials',

            credentials:{
                username :{label:"Username", type:"text", placeholder:"Enter username"},
                password: {label:"Password", type:"password", placeholder:"Enter password"}
            },

            async authorize(credentials){
                const user = {id:'1', name:"admin", password:process.env.ADMIN_PASSWORD}

                if(credentials?.username === user.name && credentials.password === user.password){
                    return user
                }

                else{
                    return null;
                }
            }
        })
    ],

    
    secret: process.env.NEXTAUTH_URL,

    pages: {
        signIn : '/api/auth/signin'
    }
}