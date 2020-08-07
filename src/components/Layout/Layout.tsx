import React, {ReactNode} from 'react';
import Head from 'next/head';
import {NavBar} from 'components';

type LayoutProps = {
    children: ReactNode,
    title?: string
}

const Layout = (props: LayoutProps) => {
    const {children, title} = props;
    
    return (
        <>
            <Head>
                <title>{title || "rembr"}</title>
            </Head>
            <NavBar />
            {children}
        </>
    );
};

export default Layout;
