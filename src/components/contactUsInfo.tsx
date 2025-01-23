import React from "react";
import styles from "./contactUsInfo.module.css";

const ContactInfoContainer: React.FC = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>We're Here to Help</h2>
            <p className={styles.description}>
                You will find us at...
                <br />
                At the rear of the Hawaiian Noranda Shopping Centre
            </p>
            <div className={styles.contactDetails}>
                <h3>Contact Information</h3>
                <p><strong>Phone:</strong>
                    <br />
                    (08) 9276 8312
                </p>
                <p>
                    <strong>Email:</strong>
                    <br />
                    secretary@mnrc.com.au
                    <br />
                    admin@mnrc.com.au
                </p>
                <p><strong>Address:</strong>
                    <br />
                    85 McGilvray Ave.
                    <br />
                    Noranda WA 6062
                </p>
            </div>
        </div>
    );
};

export default ContactInfoContainer;
