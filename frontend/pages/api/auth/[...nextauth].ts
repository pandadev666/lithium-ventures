import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const AuthOptions = {
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                const {email, password} = credentials as {
                    email: string,
                    password: string,
                };
                if(email !== 'smartguy.panda666@gmail.com' || password !== "123456") {
                    throw new Error('invalid credentials');
                }
                return {id: 1, name: 'PandaDev', email: 'smartguy.panda666@gmail.com'}
            }
        }),
    ],
    pages: {
      signIn: "/auth/signin",  
    }
}

export default NextAuth(AuthOptions)
