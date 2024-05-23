// pages/api/auth/[...nextauth].ts

import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Updated Type Declarations (if you're using custom.d.ts)
import '../../../../types/custom.d.ts';

const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
        secure: process.env.NODE_ENV === "production", // Secure in production
        sameSite: "lax", // Adjust if you have strict cross-origin needs
    },
    callbacks: {
        async session({ session, token }) {
            if (session?.user && token?.sub) {
                session.user.id = token.sub;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
            }
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development', // Enable logging in development
};

// Wrap NextAuth handler to add Cache-Control headers
const handler = NextAuth(options);
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader(
        'Cache-Control',
        'no-store, no-cache, must-revalidate, max-age=0' // Ensure no caching
    );
    return handler(req, res);
}
