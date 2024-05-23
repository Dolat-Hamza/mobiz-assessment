// types/next-auth.d.ts

import NextAuth from 'next-auth';

declare module 'next-auth' {
   export interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
            role?: string | null;
        };
    }

    interface User {
        id: string;
    }
}
