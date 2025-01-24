import React, { useState } from 'react';
import styles from '../allRooms.module.css';
import Header from "@/components/Header";
import Footer from "@/components/FooterBlock";

const MainHallRoom = () => {
    const images = [
        '/images/MainHall/MNRC_MainHall_1.jpg',
        '/images/MainHall/MNRC_MainHall_2.jpg',
        '/images/MainHall/mnrcMainHall2.jpg',
        '/images/MainHall/mnrcMainHall1.jpg',
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
                    <h1 className={styles.h1}>The Main Hall</h1>
                    <p className={styles.description}>
                        Our spacious Main Hall is the perfect venue for your special events. Whether you're planning a
                        wedding, corporate function, or community gathering, our hall offers a versatile space that can
                        accommodate up to 200 guests. With a fully equipped sound system, stage, and convenient parking,
                        your event is sure to be a success.
                    </p>
                    <ul className={styles.bulletPoints}>
                        <li>Seating capacity for up to 200 guests</li>
                        <li>Fully equipped sound system</li>
                        <li>Spacious stage for performances</li>
                        <li>Ample parking and accessibility</li>
                    </ul>
                    <div className={styles.footer}>
                        <p className={styles.price}>Price: $500 per day</p>
                        <button className={styles.button}>Book Now</button>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <div className={styles.carousel}>
                        <button onClick={prevImage} className={styles.navButton}>
                            &lt;
                        </button>
                        <img src={images[currentIndex]} alt="Main Hall" className={styles.image} />
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

export default MainHallRoom;
