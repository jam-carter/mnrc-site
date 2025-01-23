import React from "react";
import styles from "./eventBanner.module.css";

type BannerProps = {
    imageUrl: string;
    text: string;
};

const Banner: React.FC<BannerProps> = ({ imageUrl, text }) => {
    return (
        <div
            className={styles.banner}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className={styles.bannerText}>{text}</div>
        </div>
    );
};

export default Banner;
