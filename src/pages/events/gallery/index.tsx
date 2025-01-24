import { useState, useEffect } from "react";
import Header from "@/components/header";
import FooterBlock from "@/components/footerBlock";
import styles from "./photoGallery.module.css";

function PhotoGallery() {
    const placeholders = Array(12).fill("/placeholder-1.jpg");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (src: string) => {
        setSelectedImage(src);
        document.body.classList.add(styles.noScroll); // Disable scrolling
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.classList.remove(styles.noScroll); // Enable scrolling
    };

    // Close modal on Escape key press
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className={styles.photoGalleryPage}>
            <Header />
            <h1 className={styles.heading}>Photo Gallery</h1>
            <div className={styles.containerWrapper}>
                <div className={styles.galleryContainer}>
                    {placeholders.map((src, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <img
                                src={src}
                                alt={`Placeholder ${index + 1}`}
                                className={styles.image}
                                onClick={() => openModal(src)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {selectedImage && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent}>
                        <img src={selectedImage} alt="Full size" className={styles.modalImage} />
                    </div>
                </div>
            )}
            <FooterBlock />
        </div>
    );
}

export default PhotoGallery;
