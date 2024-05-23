// custom.d.ts

import {DefaultSession, SessionOptions} from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user?: {
            id: string
        } & DefaultSession['user']
    }

    interface SessionOptions extends Partial<SessionOptions> {
        secure?: boolean;
        sameSite?: 'strict' | 'lax' | 'none';
    }
}
