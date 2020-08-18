import React from 'react';
import {NextPage} from 'next';
import Link from 'next/link';
import styles from './NavBar.module.scss';

const NavBar: NextPage = () => {
    return (
        <ul className={styles.navbar}>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/decks">
                    <a>Decks</a>
                </Link>
                <ul>
                    <li>
                        <Link href="/decks/1">
                            <a>Deck 1</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/decks/2">
                            <a>Deck 2</a>
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/profile">
                    <a>Profile</a>
                </Link>
            </li>
            <li>
                <Link href="/api/login">
                    <a>Login</a>
                </Link>
            </li>
            <li>
                <Link href="/api/logout">
                    <a>Logout</a>
                </Link>
            </li>
        </ul>
    );
};

export default NavBar;
