import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:3000"
})

export const { signIn, signUp, signOut,updateUser, useSession,requestPasswordReset,resetPassword } = createAuthClient();

/**
 * sign up: register : create Account: first time user
 * sign in: log in: already have account: repeated user
 * sing out: log out
*/