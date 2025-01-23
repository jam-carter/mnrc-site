import React from "react";
import styles from "./smallEventCard.module.css";

interface SmallCardProps {
    title: string;
    description: string;
    imageUrl: string; // Added an image URL prop
}

const SmallCard: React.FC<SmallCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div
            className={styles.smallCard}
            style={{ backgroundImage: `url(${imageUrl})` }} // Set background image dynamically
        >
            <div className={styles.overlay}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
};

export default SmallCard;
