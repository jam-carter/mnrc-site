import React from "react";
import styles from "./eventCard.module.css";

type EventCardProps = {
    imageUrl: string;
    title: string;
    description: string;

};

const EventCard: React.FC<EventCardProps> = ({ imageUrl, title, description }) => {
    return (
        <div className={styles.card}>
            {/* Event Image and Hover Overlay */}
            <div
                className={styles.imageContainer}
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>

            {/* Event Details Section */}
            <div className={styles.textSection}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default EventCard;
