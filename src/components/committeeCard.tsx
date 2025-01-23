import React from 'react';
import styles from './CommitteeCard.module.css';

type CommitteeCardProps = {
    name: string;
    title: string;
    photoUrl: string;
};

const CommitteeCard: React.FC<CommitteeCardProps> = ({ name, title, photoUrl }) => {
    return (
        <div className={styles.card}>
            <div className={styles.photoContainer}>
                <img src={photoUrl} alt={`${name}'s photo`} className={styles.photo} />
            </div>
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.title}>{title}</p>
            </div>
        </div>
    );
};

export default CommitteeCard;
