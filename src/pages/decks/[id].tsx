import React from 'react';
import {NextPage} from 'next';
import {useRouter} from 'next/router';
import {Layout} from 'components';

const Decks: NextPage = () => {
    const router = useRouter();

    return (
        <Layout title={`Decks ${router.query.id}`}>
            <h1>{`Decks page ${router.query.id}`}</h1>
        </Layout>
    );
};

export default Decks;
