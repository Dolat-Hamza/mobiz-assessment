// pages/_app.tsx
import '@/styles/globals.css';
import {SessionProvider} from 'next-auth/react';
import type {AppProps} from 'next/app';
import RequireAuth from "@/components/Common/RequireAuth";
import {ThemeProvider} from "@/context/ThemeContext";

function MyApp({Component, pageProps}: AppProps) {

    return (
        <ThemeProvider>
            <title>Mobiz Assessment</title>

            <SessionProvider session={pageProps.session}>
                <RequireAuth>
                    <Component {...pageProps} />
                </RequireAuth>
            </SessionProvider>
        </ThemeProvider>

    );
}

export default MyApp;
