import Header from "../../components/Header";
import styles from "./affiliates.module.css";
import FooterBlock from "@/components/FooterBlock";
import AffiliatesCard from "@/components/AffiliatesCard";
import AffiliatesCardFlipped from "@/components/affiliatesCardFlipped";

function Affiliates() {
    const placeholderPhotos = [
        "/placeholder-1.jpg",
        "/placeholder-2.jpg",
        "/placeholder-3.jpg",
        "/placeholder-4.jpg",
    ];

    return (
        <div className={styles.affiliatesPage}>
            <Header/>
            <h1 className={styles.sectionHeading}>Affiliates Page</h1>

            <div className={styles.contentBox}>
                <p className={styles.description}>
                    Our affiliate clubs represent the heart and soul of our community, fostering connection, growth, and shared passion. Whether you're interested in sports, music, or recreation, our affiliates offer a welcoming space to explore your interests and join a vibrant network of like-minded individuals.
                </p>
                <p className={styles.description}>
                    Don’t forget to check out our
                    <a href="/affiliates/sponsers" className={styles.sponserLink}>
                        Sponsors
                    </a>
                    who play a vital role in supporting our community and making these clubs thrive.
                </p>
                <div className={styles.cardsContainer}>
                    <AffiliatesCardFlipped
                        title="Morley Bowling Club"
                        description="Morley Bowling Club offers a welcoming environment for bowlers of all skill levels, with a strong focus on community and camaraderie. Enjoy regular social events, competitions, and a great atmosphere for everyone."
                        photos={placeholderPhotos}
                    />
                    <AffiliatesCard
                        title="Noranda City Football Club"
                        description="Noranda City Football Club is dedicated to fostering a passion for soccer through teamwork, skill development, and competitive play. Players of all ages and abilities are encouraged to join and thrive in a supportive environment."
                        photos={placeholderPhotos}
                    />
                    <AffiliatesCardFlipped
                        title="Noranda Tennis Club"
                        description="Noranda Tennis Club provides excellent facilities for players to enjoy the sport, whether recreationally or competitively. With coaching programs and social events, the club caters to tennis enthusiasts of all levels."
                        photos={placeholderPhotos}
                    />
                    <AffiliatesCard
                        title="Noranda Darts Club"
                        description="Noranda Darts Club is a hub for darts lovers, offering weekly games, tournaments, and social gatherings. It’s the perfect place to sharpen your skills and enjoy good company."
                        photos={placeholderPhotos}
                    />
                    <AffiliatesCardFlipped
                        title="Brumbies Music Club"
                        description="Brumbies Music Club brings together music enthusiasts to enjoy live performances and celebrate hits from the 60s to 90s. Join us for a vibrant and nostalgic musical experience in a fun, social setting."
                        photos={placeholderPhotos}
                    />
                </div>
            </div>
            <FooterBlock/>
        </div>
    );
}

export default Affiliates;
