// ClubCard.tsx
import React from 'react';
import styles from '/ClubCard.module.css';

interface ClubCardProps {
    name: string;
    description: string;
    image: string;
}

const ClubCard: React.FC<ClubCardProps> = ({ name, description, image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.image} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{name}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
};

export default ClubCard;
