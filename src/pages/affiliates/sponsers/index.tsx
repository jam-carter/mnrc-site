import Header from "@/components/Header";
import styles from "./sponsers.module.css";
import FooterBlock from "@/components/FooterBlock";
import SponsersCard from "@/components/sponsersCard";

function Sponsers() {
    const placeholderPhotos = [
        "/placeholder-1.jpg",
        "/placeholder-2.jpg",
        "/placeholder-3.jpg",
        "/placeholder-4.jpg",
    ];

    return (
        <div className={styles.sponsersPage}>
            <Header />
            <div className={styles.headerContainer}>
                <h1 className={styles.sectionHeading}>Sponsors Page</h1>
            </div>
            <div className={styles.contentBox}>
                <p className={styles.description}>
                    Our sponsors are the backbone of our community, providing essential support and resources that help us achieve our goals. They play a pivotal role in ensuring the success of our events and initiatives.
                </p>
                <p className={styles.description}>
                    Browse through our incredible sponsors below to learn more about the businesses and individuals that generously contribute to our community's vibrant spirit.
                </p>
                <div className={styles.cardsContainer}>
                    <SponsersCard
                        title={"Metro Perth Hotel"}
                        description={"Metro Perth Hotel offers luxurious accommodations with modern amenities " +
                            "and exceptional service, making it the ideal place for both business and leisure travelers. " +
                            "Enjoy a comfortable stay in the heart of Perth."}
                        photos={placeholderPhotos}
                    />

                    <SponsersCard
                        title={"Donato's Event Catering"}
                        description={"Donato's Event Catering brings a touch of culinary excellence to your events, " +
                            "offering a wide range of menu options crafted from fresh, " +
                            "local ingredients. Perfect for weddings, corporate functions, and special occasions."}
                        photos={placeholderPhotos}
                    />

                    <SponsersCard
                        title={"Discount Picture Framing"}
                        description={"Discount Picture Framing specializes in preserving your cherished memories " +
                            "with custom framing solutions. From artwork to photos, their expert craftsmanship ensures " +
                            "the perfect finish for every piece."}
                        photos={placeholderPhotos}
                    />

                    <SponsersCard
                        title={"John Cobbett Photography"}
                        description={"John Cobbett Photography captures life's most beautiful moments with creativity and professionalism. " +
                            "From portraits to events, let them help you create lasting memories with stunning photographs."}
                        photos={placeholderPhotos}
                    />

                    <SponsersCard
                        title={"Mangoes Hair Designs"}
                        description={"Mangoes Hair Designs offers stylish and personalized haircare services in a welcoming environment. " +
                            "Let their experienced stylists bring out your best look, whether for a special occasion or everyday glam."}
                        photos={placeholderPhotos}
                    />

                    <SponsersCard
                        title={"Amber-Jade Sanderson: Member for Morley"}
                        description={"Amber-Jade Sanderson, Member for Morley, is dedicated to representing the community with integrity and passion. " +
                            "Working tirelessly to support local initiatives and improve the quality of life for residents."}
                        photos={placeholderPhotos}
                    />

                    <SponsersCard
                        title={"Elysium Fields Florists"}
                        description={"Elysium Fields Florists creates stunning floral arrangements for every occasion. From weddings to birthdays, " +
                            "their expertly designed bouquets are sure to bring joy and elegance to any setting."}
                        photos={placeholderPhotos}
                    />

                    <SponsersCard
                        title={"CircleWork"}
                        description={"CircleWork is your go-to destination for high-quality automotive repairs and maintenance. With skilled technicians " +
                            "and state-of-the-art equipment, they ensure your vehicle stays in top condition."}
                        photos={placeholderPhotos}
                    />
                </div>
            </div>
            <FooterBlock />
        </div>
    );
}

export default Sponsers;
