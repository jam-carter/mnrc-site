import React, { useState } from "react";
import styles from "./contactUsCard.module.css";

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <div className={styles.contactUs}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">
                        Name
                    </label>
                    <input className={styles.input}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input className={styles.input}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">
                        Phone Number
                    </label>
                    <input className={styles.input}
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g., +1 234 567 890"
                        pattern="^\+?[0-9\s\-]+$"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea className={styles.input}
                        id="message"
                        name="message"
                        placeholder="Please type message here"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>
                    Send Now
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
