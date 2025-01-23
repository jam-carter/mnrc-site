import React, { useState } from 'react';
import styles from '../mainHall/mainHall.module.css';
import Header from "@/components/Header";
import Footer from "@/components/FooterBlock";

const TheDenRoom = () => {
    const images = [
        '../images/meetingRoom/mnrc-meetingRoom-1.jpg',
        '../images/meetingRoom/mnrc-meetingRoom-2.jpg',
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
                    <h1 className={styles.h1}>The Den</h1>
                    <p className={styles.description}>
                        The Den is a stylish and versatile space designed for smaller gatherings, casual events, or
                        private functions. Its warm and inviting ambiance provides the perfect backdrop for your next
                        event, whether it's a birthday celebration or a club meeting.
                    </p>
                    <ul className={styles.bulletPoints}>
                        <li>Comfortable seating for up to 30 guests</li>
                        <li>Cozy and intimate atmosphere</li>
                        <li>Perfect for casual gatherings or private functions</li>
                        <li>Accessible facilities and ample parking</li>
                    </ul>
                    <div className={styles.footer}>
                        <p className={styles.price}>Price: $200 per day</p>
                        <button className={styles.button}>Book Now</button>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <div className={styles.carousel}>
                        <button onClick={prevImage} className={styles.navButton}>
                            &lt;
                        </button>
                        <img src={images[currentIndex]} alt="The Den" className={styles.image} />
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

export default TheDenRoom;

