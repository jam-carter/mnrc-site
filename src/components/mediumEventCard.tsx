import React from "react";
import styles from "./mediumEventCard.module.css";

interface MediumCardProps {
    title: string;
    description: string;
    imageUrl: string;
    additionalInfo: string;  // Add a new prop for the small window content
}

const MediumCard: React.FC<MediumCardProps> = ({ title, description, imageUrl, additionalInfo }) => {
    return (
        <div className={styles.cardContainer}>
            <div
                className={styles.mediumCard}
                style={{ backgroundImage: `url(${imageUrl})` }} // Set background image dynamically
            >
                <div className={styles.overlay}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
            </div>
            {/* New window next to the card */}
            <div className={styles.infoWindow}>
                <h3>Additional Info</h3>
                <p>{additionalInfo}</p>
            </div>
        </div>
    );
};

export default MediumCard;
