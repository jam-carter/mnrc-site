// AffiliateClubsBlock.tsx
import React from 'react';
import styles from './AffiliateClubBlock.module.css';
import ClubCard from '../clubCard';

const clubs = [
    {
        name: "Brumbies Music Club",
        description:
            "The Brumbies Music Club brings together music enthusiasts to enjoy live performances of 60’s to 90’s music.",
        image: "/placeholder-brumbies.jpg",
    },
    {
        name: "Morley Bowling Club",
        description:
            "The Morley Bowling Club offers a community-focused environment for both competitive and social bowling.",
        image: "/placeholder-lawnbowl.jpg",
    },
    {
        name: "Noranda Football Club",
        description:
            "The Noranda Football Club fosters a passion for football through teamwork, skill development, and competitive play for all ages and abilities.",
        image: "/placeholder-soccer.jpg",
    },
    {
        name: "Noranda Tennis Club",
        description:
            "The Noranda Tennis Club fosters a passion for football through teamwork, skill development, and competitive play for all ages and abilities.",
        image: "/placeholder-tennis.jpg",
    } ,
    {
        name: "Noranda Darts Club",
        description:
            "The Noranda Darts Club fosters a passion for football through teamwork, skill development, and competitive play for all ages and abilities.",
        image: "/placeholder-dart.jpg",
    }
];

const AffiliateClubsBlock: React.FC = () => {
    return (
        <section className={styles.affiliateBlock}>
            <h2 className={styles.title}>Our Affiliate Clubs</h2>
            <div className={styles.cardsContainer}>
                {clubs.map((club, index) => (
                    <ClubCard
                        key={index}
                        name={club.name}
                        description={club.description}
                        image={club.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default AffiliateClubsBlock;


