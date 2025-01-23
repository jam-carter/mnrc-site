import React, { useState } from "react";
import styles from "./fakeMap.module.css";

const FakeGoogleMaps: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            className={styles.mapContainer}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div
                className={styles.mapImage}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            >
                <img
                    src="/placeholder-fakeMap.jpg" /* Replace with your map image */
                    alt="Fake Google Maps"
                />
            </div>
        </div>
    );
};

export default FakeGoogleMaps;
