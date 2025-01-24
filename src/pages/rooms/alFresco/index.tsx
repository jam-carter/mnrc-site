import React, { useState } from 'react';
import styles from '../allRooms.module.css';
import Header from "@/components/Header";
import Footer from "@/components/FooterBlock";

const AlFrescoRoom = () => {
    const images = [
        '/placeholder-1.jpg',
        '/placeholder-2.jpg',
        '/placeholder-3.jpg'
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
                    <h1 className={styles.h1}>Al Fresco Area</h1>
                    <p className={styles.description}>
                        The Al Fresco Area is a vibrant and open space perfect for outdoor events and casual gatherings.
                        Whether you're hosting a barbecue, a garden party, or a family celebration, this versatile area
                        offers the perfect setting with beautiful surroundings and plenty of fresh air.
                    </p>
                    <ul className={styles.bulletPoints}>
                        <li>Outdoor seating for up to 100 guests</li>
                        <li>Shaded areas for comfort</li>
                        <li>Perfect for barbecues and garden parties</li>
                        <li>Accessible facilities and parking</li>
                    </ul>
                    <div className={styles.footer}>
                        <p className={styles.price}>Price: $300 per day</p>
                        <button className={styles.button}>Book Now</button>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <div className={styles.carousel}>
                        <button onClick={prevImage} className={styles.navButton}>
                            &lt;
                        </button>
                        <img src={images[currentIndex]} alt="Al Fresco Area" className={styles.image} />
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

export default AlFrescoRoom;
