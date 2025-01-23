// ContactUsBlock.tsx
import React from 'react';
import styles from './ContactUsBlock.module.css';


const ContactUsBlock: React.FC = () => {
    return (
        <section className={styles.contactUsBlock}>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Contact Us</h2>
                    <p className={styles.paragraph}>
                        We’d love to hear from you! Whether you have questions, feedback, or would like to inquire about our services, feel free to reach out.
                    </p>
                    <ul className={styles.contactDetails}>
                        <li><strong>Location:</strong> 85 McGilvray Ave, Noranda WA 6062</li>
                        <li><strong>Phone:</strong> (08) 9276 8312</li>
                        <li><strong>Email:</strong> <a href="mailto:admin@mnrc.com.au" className={styles.link}>admin@mnrc.com.au</a></li>
                        <li><strong>Email:</strong> <a href="mailto:sec@mnrc.com.au" className={styles.link}>secretary@mnrc.com.au</a></li>
                    </ul>
                </div>
                <div className={styles.mapContainer}>
                    <img
                        src="/placeholder-map.jpg"
                        alt="Map of our location"
                        className={styles.mapImage}
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactUsBlock;
