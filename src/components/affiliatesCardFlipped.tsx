import React, { useState } from 'react';
import styles from './affiliatesCardFlipped.module.css';
//photo is on the left, description on the right
interface AffiliatesCardFlippedProps {
    title: string;
    description: string;
    photos: string[];
}

const AffiliatesCardFlipped: React.FC<AffiliatesCardFlippedProps> = ({ title, description, photos }) => {
    const [currentPhoto, setCurrentPhoto] = useState(0);

    const handlePrev = () => {
        setCurrentPhoto((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentPhoto((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.card}>
            <div className={styles.photoSection}>
                <img src={photos[currentPhoto]} alt={`Slide ${currentPhoto + 1}`} className={styles.photo} />
                <div className={styles.controls}>
                    <button onClick={handlePrev}>&lt;</button>
                    <button onClick={handleNext}>&gt;</button>
                </div>
            </div>
            <div className={styles.textSection}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AffiliatesCardFlipped;
