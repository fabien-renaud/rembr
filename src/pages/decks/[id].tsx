import React from 'react';
import {useRouter} from 'next/router';
import {Layout} from 'components';

const Decks: React.FC = () => {
    const router = useRouter();

    return (
        <Layout title={`Decks ${router.query.id}`}>
            <h1>{`Decks page ${router.query.id}`}</h1>
        </Layout>
    );
};

export default Decks;
