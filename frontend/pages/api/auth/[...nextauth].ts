import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import * as API from "@/api/auth";

const AuthOptions = {
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials) {
                return API.signin(credentials)
                    .then((res) => res?.user)
                    .catch((err) => {throw new Error(err?.response?.data?.message)});
            }
        }),
    ],
    pages: {
      signIn: "/auth/signin",  
    }
}

export default NextAuth(AuthOptions)
