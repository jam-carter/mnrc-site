import React from 'react';
import CommitteeCard from '@/components/committeeCard';
import styles from './committee.module.css';
import Footer from "@/components/FooterBlock";
import Header from "@/components/Header";

const members = [
    { name: 'Mick Wainwright', title: 'President', photoUrl: './images/management/placeholderMale.png' },
    { name: 'Danny Mayers', title: 'Vice President', photoUrl: './images/management/placeholderMale.png' },
    { name: 'Janet Spellissy', title: 'Secretary', photoUrl: './images/management/placeholderFemale.jpg' },
    { name: 'Gordon Slee', title: 'Treasurer', photoUrl: './images/management/placeholderMale.png' },
    { name: 'Chris Newell', title: 'Registrar', photoUrl: './images/management/placeholderMale.png' },
    { name: 'Jan Earle', title: 'Committee Member', photoUrl: './images/management/placeholderFemale.jpg' },
    { name: 'Jackie Criddle', title: 'Committee Member', photoUrl: './images/management/placeholderFemale.jpg' },
    { name: 'Kerry Godden', title: 'Committee Member', photoUrl: './images/management/placeholderFemale.jpg' },
    { name: 'Stephanie Grey', title: 'Committee Member', photoUrl: './images/management/placeholderFemale.jpg' },
    { name: 'Tony Luckcraft', title: 'Committee Member', photoUrl: './images/management/placeholderMale.png' },
    { name: 'Maureen Liddington', title: 'Committee Member', photoUrl: './images/management/placeholderFemale.jpg' },
];

const CommitteePage: React.FC = () => {
    return (
        <div className={styles.committeePage}>
            <Header/>
            <h1 className={styles.sectionHeading}>Our Committee</h1>
            <div className={styles.page}>
                <div className={styles.container}>
                    <p className={styles.description}>
                        Our Management Committee is composed of dedicated members who work tirelessly to ensure the
                        smooth operation and ongoing success of the
                        Morley Noranda Recreation Club. Each role within the committee, from the President to the
                        regular committee members,
                        plays a vital part in overseeing the clubs governance, maintaining its values, and driving
                        future growth.
                    </p>
                    <p className={styles.description}>
                        Meet the individuals who lead our club and support its vibrant community :
                    </p>

                    <div className={styles.grid}>
                        {members.map((member, index) => (
                            <CommitteeCard
                                key={index}
                                name={member.name}
                                title={member.title}
                                photoUrl={member.photoUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default CommitteePage;
