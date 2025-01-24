import Header from "../../components/header";
import styles from "./contact.module.css";
import Footer from "@/components/footerBlock";
import ContactUsCard from "@/components/contactUsCard";
import React from "react";
import ContactUsInfo from "@/components/contactUsInfo";
import FakeGoogleMaps from "@/components/fakeMap";

function Contact() {
    return (
        <div className={styles.contactUsPage}>
            <Header />
            <h1 className={styles.heading}>Contact Us</h1>
            <div className={styles.container}>
                <div className={styles.contactUsSection}>
                    <ContactUsInfo />
                    <ContactUsCard />
                </div>
                <div className={styles.fakeMap}>
                    <FakeGoogleMaps />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
