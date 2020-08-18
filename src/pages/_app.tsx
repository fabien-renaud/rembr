import React from 'react';
import {NextPage} from 'next';
import {AppProps} from 'next/app';
import 'styles/globals.css';

const App: NextPage<AppProps> = ({Component, pageProps}: AppProps) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />;
};

export default App;
