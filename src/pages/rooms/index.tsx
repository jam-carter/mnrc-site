import styles from './rooms.module.css';
import Header from "@/components/Header";
import Footer from "@/components/FooterBlock";
import RoomCard from "@/components/roomsCard";

const RoomsPage = () => {
    const rooms = [
        {
            title: "Main Hall",
            description: "A spacious hall suitable for large events, weddings, and parties. Equipped with state-of-the-art audio-visual facilities.",
            photo: "/images/MainHall/MNRC_MainHall_1.jpg",
            link: "/rooms/mainHall"
        },
        {
            title: "The Snug",
            description: "A cozy space perfect for small gatherings or informal meetings. Comfortable seating and warm ambiance included.",
            photo: "/images/Room-TheSnug/MNRC_Snug_1.jpg",
            link: "/rooms/theSnug"
        },
        {
            title: "The Den",
            description: "A versatile room for casual or semi-formal events. Ideal for workshops and private celebrations.",
            photo: "/images/MainHall/MNRC_MainHall_1.jpg",
            link: "/rooms/theDen"
        },
        {
            title: "Al Fresco Area",
            description: "An open-air space for outdoor parties, BBQs, or informal gatherings under the sky.",
            photo: "/images/MainHall/MNRC_MainHall_1.jpg",
            link: "/rooms/alFresco"
        },
        {
            title: "Meeting Room",
            description: "A professional space for business meetings, equipped with modern technology and comfortable seating.",
            photo: "/images/meetingRoom/mnrc_meetingroom-1.jpg",
            link: "/rooms/meetingRoom"
        }
    ];

    const handleBookNow = (roomTitle: string) => {
        console.log(`Book Now clicked for ${roomTitle}`);
    };

    return (
        <div className={styles.roomsPage}>
            <Header/>
            <h1 className={styles.sectionHeading}>Our Rooms</h1>

            <div className={styles.contentBox}>
                <div>
                    <p className={styles.descriptiveText}>
                        Discover our versatile spaces available for hire, perfect for a variety of events and gatherings.
                    </p>
                    <p className={styles.descriptiveText}>
                        Each room is designed to cater to your unique needs, ensuring a comfortable and memorable
                        experience.
                    </p>
                    <div className={styles.roomCardsContainer}>
                        {rooms.map((room, index) => (
                            <RoomCard
                                key={index}
                                title={room.title}
                                description={room.description}
                                photo={room.photo}
                                onBookNow={() => handleBookNow(room.title)}
                                onMoreInfo={() => window.location.href = room.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default RoomsPage;
