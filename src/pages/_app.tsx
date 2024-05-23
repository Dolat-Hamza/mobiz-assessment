// pages/_app.tsx
import '@/styles/globals.css';
import {SessionProvider} from 'next-auth/react';
import type {AppProps} from 'next/app';
import RequireAuth from "@/components/Common/RequireAuth";

function MyApp({Component, pageProps}: AppProps) {
    return (

        <SessionProvider session={pageProps.session}>
            <RequireAuth>
                <Component {...pageProps} />
            </RequireAuth>
        </SessionProvider>

    );
}

export default MyApp;
