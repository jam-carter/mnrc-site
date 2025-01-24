import styles from './membershipPricingTable.module.css';

interface DataRow {
    club: string;
    membershipType: string;
    fullPrice: string;
    pensionerPrice: string;
    juniorPrice: string;
    [key: string]: any; // Allow additional properties if needed
}

interface TableProps {
    columns: string[];
    data: DataRow[];
}

function Table({ columns, data }: TableProps) {
    const columnKeyMap: { [key: string]: keyof DataRow } = {
        "Club": "club",
        "Membership Type": "membershipType",
        "Full Price": "fullPrice",
        "Pensioner Price": "pensionerPrice",
        "Junior Price": "juniorPrice",
    };

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column}>{column}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((column) => (
                            <td key={column}>
                                {row[columnKeyMap[column]] || "N/A"}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;