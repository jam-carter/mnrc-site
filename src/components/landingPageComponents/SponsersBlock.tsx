import React from 'react';
import styles from './SponsersBlock.module.css';

const images = [
    { src: '/placeholder-baker.jpg', alt: 'Placeholder Image baker' },
    { src: '/placeholder-artist.jpg', alt: 'Placeholder Image artist' },
    { src: '/placeholder-politician.jpg', alt: 'Placeholder Image politician' },
    { src: '/placeholder-florist.jpg', alt: 'Placeholder Image florist' },
    { src: '/placeholder-hairdresser.jpg', alt: 'Placeholder Image hairdresser' },
    { src: '/placeholder-yoga.jpg', alt: 'Placeholder Image yoga' },
];

const ImageDisplayBlock: React.FC = () => {
    return (
        <section className={styles.sponsersBlock}>
            <h2 className={styles.title}>Our Sponsors & Supporters</h2>
            <div className={styles.carousel}>
                <div className={styles.imageContainer}>
                    {images.concat(images).map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={styles.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageDisplayBlock;