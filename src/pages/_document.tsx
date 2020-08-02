import React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';

class Doc extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="Learn and review memory cards with rembr." />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Doc;
