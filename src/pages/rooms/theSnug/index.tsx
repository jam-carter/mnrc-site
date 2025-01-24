import React, { useState } from 'react';
import styles from '../allRooms.module.css';
import Header from "@/components/Header";
import Footer from "@/components/FooterBlock";

const TheSnugRoom = () => {
    const images = [
        '../images/Room-TheSnug/MNRC_Snug_1.jpg',
        '../images/Room-TheSnug/MNRC_Snug_2.jpg',
        '../images/Room-TheSnug/MNRC_Snug_3.jpg',
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
                    <h1 className={styles.h1}>The Snug</h1>
                    <p className={styles.description}>
                        Our cozy Snug room is the ideal space for intimate gatherings and small events. Perfect for
                        private parties, meetings, or casual get-togethers, The Snug offers a warm and inviting
                        atmosphere that ensures your guests feel right at home.
                    </p>
                    <ul className={styles.bulletPoints}>
                        <li>Comfortable seating for up to 50 guests</li>
                        <li>Private and cozy environment</li>
                        <li>Optional catering services available</li>
                        <li>Ample parking and easy access</li>
                    </ul>
                    <div className={styles.footer}>
                        <p className={styles.price}>Price: $250 per day</p>
                        <button className={styles.button}>Book Now</button>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <div className={styles.carousel}>
                        <button onClick={prevImage} className={styles.navButton}>
                            &lt;
                        </button>
                        <img src={images[currentIndex]} alt="The Snug" className={styles.image} />
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

export default TheSnugRoom;
