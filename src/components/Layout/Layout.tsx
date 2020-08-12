import React, {ReactNode} from 'react';
import Head from 'next/head';
import {NavBar} from 'components';

type LayoutProps = {
    children: ReactNode;
    title?: string;
};

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    const {children, title} = props;

    return (
        <>
            <Head>
                <title>{`${title} | rembr` || 'rembr'}</title>
            </Head>
            <NavBar />
            {children}
        </>
    );
};

export default Layout;
