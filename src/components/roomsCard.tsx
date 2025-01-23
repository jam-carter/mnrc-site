import React from "react";
import styles from "./roomsCard.module.css";

interface RoomCardProps {
    title: string;
    description: string;
    photo: string;
    onBookNow: () => void;
    onMoreInfo: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ title, description, photo, onBookNow, onMoreInfo }) => {
    return (
        <div className={styles.roomCard}>
            {/* Left Section */}
            <div className={styles.textSection}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.buttonGroup}>
                    <button className={styles.bookNowButton} onClick={onBookNow}>
                        Book Now
                    </button>
                    <button className={styles.moreInfoButton} onClick={onMoreInfo}>
                        More Info
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className={styles.photoSection}>
                <img
                    src={photo}
                    alt={`${title} Room`}
                    className={styles.photo}
                />
            </div>
        </div>
    );
};

export default RoomCard;
