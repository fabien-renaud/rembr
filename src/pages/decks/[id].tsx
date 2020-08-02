import React from 'react';
import {useRouter} from 'next/router';
import {NavBar} from 'components';

export default function Decks() {
    const router = useRouter();

    return (
        <div>
            <h1>Decks page {router.query.id}</h1>
            <NavBar />
        </div>
    )
};
