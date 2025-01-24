import React, { useState } from 'react';
import styles from './roomSectionBlock.module.css';

interface Room {
    id: number;
    image: string;
    name: string;
}

const rooms: Room[] = [
    { id: 1, image: '/images/MainHall/MNRC_MainHall_1.jpg', name: 'Main Hall' },
    { id: 2, image: '/images/Room-TheSnug/MNRC_Snug_3.jpg', name: 'The Snug' },
    { id: 3, image: '/images/MainHall/MNRC_MainHall_1.jpg', name: 'The Den' },
    { id: 4, image: '/images/MainHall/MNRC_MainHall_1.jpg', name: 'Al Fresco Area' },
    { id: 5, image: '/images/MainHall/MNRC_MainHall_1.jpg', name: 'Meeting Room' },
];

const RoomSectionBlock: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.roomSectionBlock}>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Rooms Available for Rent</h2>
                    <p className={styles.paragraph}>
                        Explore our wide range of rooms available for your events, gatherings, and celebrations. From
                        small meeting spaces to larger function halls, we have the perfect space for your needs.
                    </p>
                    <p className={styles.paragraph}>
                        Click <a href="/rooms" className={styles.link}>Here</a> for more information about what we offer.
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.tabContainer}>
                        {rooms.map((room, index) => (
                            <button
                                key={room.id}
                                className={`${styles.tabButton} ${
                                    activeTab === index ? styles.activeTab : ''
                                }`}
                                onClick={() => setActiveTab(index)}
                            >
                                {room.name}
                            </button>
                        ))}
                    </div>
                    <img
                        src={rooms[activeTab].image}
                        alt={rooms[activeTab].name}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
};

export default RoomSectionBlock;
