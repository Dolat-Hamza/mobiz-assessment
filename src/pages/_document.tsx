import React from 'react';
import {Head, Html, Main, NextScript} from 'next/document';

const MyDocument = () => (
    <Html lang="en">
        <Head>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
);


export default MyDocument;
