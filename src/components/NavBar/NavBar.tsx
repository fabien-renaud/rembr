import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
    return (
        <ul className={styles.navbar}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/decks">Decks</Link>
                <ul>
                    <li>
                        <Link href="/decks/1">Deck 1</Link>
                    </li>
                    <li>
                        <Link href="/decks/2">Deck 2</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/profile">Profile</Link>
            </li>
        </ul>
    );
};

export default NavBar;
