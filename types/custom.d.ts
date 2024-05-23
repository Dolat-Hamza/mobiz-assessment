// custom.d.ts

import {DefaultSession, SessionOptions} from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
            role?: string | null; // Add the role property here
        };
    }

    interface SessionOptions extends Partial<SessionOptions> {
        secure?: boolean;
        sameSite?: 'strict' | 'lax' | 'none';
    }
}
