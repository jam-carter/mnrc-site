// MembershipBlock.tsx
import React from 'react';
import styles from './MembershipBlock.module.css';

const MembershipBlock: React.FC = () => {
    return (
        <section className={styles.membershipBlock}>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Membership</h2>
                    <p className={styles.paragraph}>
                        Join our community today! We offer a variety of membership types, including voting and non-voting options, to suit your needs.
                    </p>
                    <p className={styles.paragraph}>
                        Find out more about being and becoming a member <a href="/membership" className={styles.link}>here</a>.
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <img
                        src="/placeholder-membership.jpg"
                        alt="Placeholder for membership image"
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
};

export default MembershipBlock;

