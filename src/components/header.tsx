import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <img
                        src="/mnrc-logo-noBackround.jpg"
                        alt="Morley Noranda Recreation Club Logo"
                        className={styles.logoImage}
                    />
                </Link>
            </div>
            <nav className={styles.navBar}>
                <ul className={styles.navList}>
                    <li className={`${styles.navItem} ${styles.dropdown}`}>
                        <a href="/events">Events</a>
                        <ul className={styles.dropdownMenu}>
                            <li className={styles.dropdownItem}>
                                <Link href="/events/gallery">Photo Gallery</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.navItem}><a href="/membership">Membership</a></li>
                    <li className={styles.navItem}><a href="/rooms">Bookings</a></li>
                    <li className={`${styles.navItem} ${styles.dropdown}`}>
                        <a href="/affiliates">Affiliates</a>
                        <ul className={styles.dropdownMenu}>
                            <li className={styles.dropdownItem}>
                                <Link href="/affiliates/sponsers">Sponsors</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.navItem}><a href="/committee">Committee</a></li>
                    <li className={styles.navItem}><a href="/history">Our History</a></li>
                    <li className={styles.navItem}><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;




//add drop down menus for some: Bookings -> each room (snug, den, etc)
