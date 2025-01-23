import Header from "../../components/Header";
import FooterBlock from "@/components/FooterBlock";
import MembershipPricingTable from "@/components/membershipPricingTable";
import styles from "./membership.module.css";

const membershipData = [
    { club: "MNRC", membershipType: "Recreational Social", fullPrice: "$47.00", pensionerPrice: "$43.00", juniorPrice: "N/A" },
    { club: "MNRC", membershipType: "Recreational Ordinary", fullPrice: "$61.00", pensionerPrice: "$57.00", juniorPrice: "N/A" },
    { club: "Morley Bowling Club", membershipType: "Social", fullPrice: "$120.00", pensionerPrice: "$110.00", juniorPrice: "$20.00" },
    { club: "Morley Bowling Club", membershipType: "Ordinary", fullPrice: "$190.00", pensionerPrice: "$175.00", juniorPrice: "N/A" },
    { club: "Noranda Darts Club", membershipType: "Social", fullPrice: "$51.00", pensionerPrice: "$47.00", juniorPrice: "N/A" },
    { club: "Noranda Darts Club", membershipType: "Ordinary", fullPrice: "$61.00", pensionerPrice: "$57.00", juniorPrice: "N/A" },
    { club: "Noranda Tennis Club", membershipType: "Ordinary", fullPrice: "$130.00", pensionerPrice: "$120.00", juniorPrice: "$50.00" },
    { club: "Brumbies Country Music Club", membershipType: "Social", fullPrice: "$51.00", pensionerPrice: "$47.00", juniorPrice: "N/A" },
    { club: "Brumbies Country Music Club", membershipType: "Ordinary", fullPrice: "$61.00", pensionerPrice: "$57.00", juniorPrice: "N/A" },
    { club: "Darts/Bowls Member", membershipType: "Ordinary", fullPrice: "$190.00", pensionerPrice: "$175.00", juniorPrice: "N/A" },
    { club: "Bowls/Tennis Member", membershipType: "Ordinary", fullPrice: "$255.00", pensionerPrice: "$236.00", juniorPrice: "N/A" },
    { club: "Noranda City Football Club", membershipType: "Rates Based on Application", fullPrice: "N/A", pensionerPrice: "N/A", juniorPrice: "N/A" }
];

const membershipColumns = ["Club", "Membership Type", "Full Price", "Pensioner Price", "Junior Price"];

function Membership() {
    return (
        <div className={styles.membershipPage}>
            <Header />
            <h1 className={styles.sectionHeading}>Membership Page</h1>
            <main className={styles.contentContainer}>
                <p className={styles.description}>
                    <span className={styles.paragraph}>
                        Are you looking for a community-focused club that embraces family values, works with local agencies,
                        and sporting codes to bring high-quality facilities for our members? Let us help you link together
                        with other like-minded community groups and members.
                    </span>

                    <span className={styles.paragraph}>
                        Memberships include use of club facilities 7 days a week, including the
                        Sports Bar where you can watch the footy or catch up on the latest sporting activities.
                        You have access to discounted function room hire, and you can place
                        your bets on our new and updated TAB machines.
                    </span>

                    <span className={styles.paragraph}>
                        There are a number of membership opportunities based on your interest, including Social Members and
                        Full Memberships where you have a say on how the club is run.
                    </span>

                    <span className={styles.paragraph}>
                        Below is a table of our membership rates for the 24/25 financial year.
                        However, please feel free to call and enquire for more information.
                    </span>
                </p>

                <MembershipPricingTable columns={membershipColumns} data={membershipData}/>

                <p className={styles.downloadPlaceholder}>
                    <a
                        href="/MNRC%20Nomination%20Form%202024-2025.pdf"
                        className={styles.downloadLink}
                        download
                    >
                        Click here to download the membership form
                    </a>
                </p>

            </main>
            <FooterBlock/>
        </div>
    );
}

export default Membership;
