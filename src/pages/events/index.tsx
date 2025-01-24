import React from "react";
import Header from "../../components/header";
import Footer from "@/components/footerBlock";
import LargeEventCard from "@/components/eventCard";
import Banner from "../../components/eventBanner";
import styles from "./events.module.css";

const EventsPage: React.FC = () => {
    return (
        <div className={styles.eventsPage}>
            <Header />
            <h1 className={styles.sectionHeading}>Events</h1>
            <div>
                <div className={styles.container}>
                    <p className={styles.description}>See what's on around the club!</p>
                    <div className={styles.gridContainer}>
                        <LargeEventCard
                            imageUrl="/placeholder-beer.jpg"
                            title="Beer Of The Month"
                            description="Come on down during January to enjoy Swan Draught for $8 a pint"
                        />

                        <LargeEventCard
                            imageUrl="/placeholder-buffet.jpg"
                            title="Friday Night Meals"
                            description="Every other friday night from 6pm, come down and enjoy a meal from our in-house caterer Dontato's"
                        />

                        <LargeEventCard
                            imageUrl="/placeholder-joker.jpg"
                            title="Jag the Joker"
                            description="Every friday night is Jag The Joker! Come on down for a chance to win up to $2000! (must be a member or sitting with a member to recieve a ticket, one per drink)"
                        />
                    </div>

                    <Banner
                        imageUrl="/placeholder-happyHour.jpg"
                        text="Happy Hour Every Sunday 4PM-6PM"
                    />

                    <div className={styles.gridContainer}>
                        <LargeEventCard
                            imageUrl="/placeholder-raffles.jpg"
                            title="Friday Night Raffles"
                            description="Friday nights at MNRC is raffles night, from meat trays to bottles of wine, there are multiple raffles going off"
                        />

                        <LargeEventCard
                            imageUrl="/placeholder-1.jpg"
                            title="Placeholder Title"
                            description="Placeholder description"
                        />

                        <LargeEventCard
                            imageUrl="/placeholder-1.jpg"
                            title="Placeholder Title"
                            description="Placeholder description"
                        />
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default EventsPage;
