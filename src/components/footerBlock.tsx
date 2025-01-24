import React from 'react';
import styles from './footerBlock.module.css';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.text}>
                    © 2024 Morley Noranda Recreation Club Inc. All rights reserved.
                </p>
                <p className={styles.text}>
                    Designed by Jamaul Aaron - MNRC Duty Manager
                </p>
                <button
                    className={styles.backToTopButton}
                    onClick={scrollToTop}
                >
                    Back to Top
                </button>
            </div>
        </footer>
    );
};

export default Footer;
