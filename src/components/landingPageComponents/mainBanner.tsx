import React from 'react';
import styles from './mainBanner.module.css';

const MainBanner: React.FC = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.overlay}>
            </div>
        </section>
    );
};

export default MainBanner;
