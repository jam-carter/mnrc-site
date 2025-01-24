import React from 'react';
import styles from './introBlock.module.css';

const IntroBlock: React.FC = () => {
    return (
        <section className={styles.introBlock}>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Welcome to the <br/>  Morley Noranda Recreation Club</h2>
                    <p className={styles.paragraph}>
                        The Morley Noranda Recreation Club has a rich history of community engagement and recreation.
                        Our facilities are open to everyone, offering a wide range of activities and services.
                    </p>
                    <p className={styles.paragraph}>
                        Learn more about <a href="/history" className={styles.link}> Our History</a>
                    </p>
                </div>
                <div className={styles.imageContainer}>
                <img
                        src="/placeholder-image.jpg"
                        alt="Placeholder for club photo"
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
};

export default IntroBlock;
