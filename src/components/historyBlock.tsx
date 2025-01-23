import React from 'react';
import styles from './historyBlock.module.css';

interface HistoryBlockProps {
    title: string;
    content: string;
    image: string;
}

const HistoryBlock: React.FC<HistoryBlockProps> = ({ title, content, image }) => (
    <div className={styles.block}>
        <img src={image} alt={`${title} image`} className={styles.image} />
        <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{content}</p>
        </div>
    </div>
);

export default HistoryBlock;
