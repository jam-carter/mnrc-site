import React, { useState } from 'react';
import styles from '../mainHall/mainHall.module.css';
import Header from "@/components/Header";
import Footer from "@/components/FooterBlock";

const MeetingRoom = () => {
    const images = [
        '../images/meetingRoom/mnrc_meetingRoom-1.jpg',
        '../images/meetingRoom/mnrc_meetingRoom-2.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.mainHallPage}>
            <Header />
            <div className={styles.container}>
                <div className={styles.textSection}>
                    <h1 className={styles.h1}>Meeting Room</h1>
                    <p className={styles.description}>
                        The Meeting Room is a professional and functional space designed to host your business meetings,
                        workshops, or small conferences. Equipped with modern amenities and a comfortable setting, it's
                        the perfect environment to get things done.
                    </p>
                    <ul className={styles.bulletPoints}>
                        <li>Seating for up to 20 attendees</li>
                        <li>Equipped with a projector and screen</li>
                        <li>High-speed Wi-Fi for seamless connectivity</li>
                        <li>Convenient access to parking and restrooms</li>
                    </ul>
                    <div className={styles.footer}>
                        <p className={styles.price}>Price: $150 per day</p>
                        <button className={styles.button}>Book Now</button>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <div className={styles.carousel}>
                        <button onClick={prevImage} className={styles.navButton}>
                            &lt;
                        </button>
                        <img src={images[currentIndex]} alt="Meeting Room" className={styles.image} />
                        <button onClick={nextImage} className={styles.navButton}>
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MeetingRoom;
