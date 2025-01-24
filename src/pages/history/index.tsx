import React from 'react';
import HistoryBlock from '../../components/historyBlock';
import styles from './history.module.css';
import Header from "@/components/header";
import Footer from "@/components/footerBlock";

const History = () => {
    const historyData = [
        {
            title: 'Founding of MNRC',
            content: 'Founded in 1976, the Morley Noranda Recreation Club began its journey as the Morley Bowling Club, however, ' +
                'the idea of establishing a bowling club in Morley was first conceived a decade earlier at the Bassendean Bowling Club. ' +
                'Over a few beers, four local bowlers, envisioned creating a place closer to home where residents could enjoy a game of bowls ' +
                'and a social drink. The old Morley Park Hotel (now Dan Murphy’s bottle shop) became the hub for these discussions, ' +
                'attracting more enthusiasts and ultimately giving birth to the concept.',
            image: '/placeholder-1.jpg',
        },
        {
            title: 'Major Milestones',
            content: 'In July 1976, with the collaboration of the Shire of Bayswater, three local councillors, and 31 community members, a unanimous decision was ' +
                'made to establish a sporting and recreation club in Morley under the Bowling Club annex. By September 1976, the club was officially named the Morley ' +
                'Districts Recreational Club, which is now known as the Morley Noranda Recreation Club.',
            image: '/placeholder-2.jpg',
        },
        {
            title: 'Community Impact',
            content: 'In mid-January 1979, the bowling greens were officially opened, and competitions began in the 1979/80 season, marking the start of a ' +
                'long tradition that continues today. Around this time, a group of dedicated volunteers constructed the original bar and clubrooms, affectionately ' +
                'known as the little house on the prairie. This modest, low-roofed building stood in the middle of an open recreation space.',
            image: '/placeholder-3.jpg',
        },
        {
            title: 'Looking Ahead',
            content: 'By 1981, the club had outgrown its original facility, prompting the construction of a new, larger building. This facility, which remains in use today, ' +
                'was formally opened by Shire President Cr. N.E. Davis on Sunday, January 30, 1983. Fast forward to now, and the club has undergone numerous renovations to ' +
                'accommodate its growing membership. Today, the Morley Noranda Recreation Club is home to various sporting codes and community groups, including the Noranda ' +
                'City Football Club, Morley Tennis Club, Morley Darts Club, BrumbiesCountry Music Club, Lions of Noranda, Morley Ladies and Men’s Probus groups, and many other' +
                ' local organizations.',
            image: '/placeholder-4.jpg',
        },
    ];

    return (
        <div className={styles.historyPage}>
            <Header />
            <div>
                <h1 className={styles.heading}>Our History</h1>
                <div className={styles.timelineContainer}>
                    {historyData.map((section, index) => (
                        <HistoryBlock
                            key={index}
                            title={section.title}
                            content={section.content}
                            image={section.image}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default History;
