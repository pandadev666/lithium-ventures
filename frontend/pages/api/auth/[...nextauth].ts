import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import * as API from "@/api";

const AuthOptions = {
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                const response = await API.signin(credentials);
                console.log(response);
                if (response.status == "success") {
                    return response.user
                }
                else {
                    throw new Error(response.error)
                }
            }
        }),
    ],
    pages: {
      signIn: "/auth/signin",  
    }
}

export default NextAuth(AuthOptions)
