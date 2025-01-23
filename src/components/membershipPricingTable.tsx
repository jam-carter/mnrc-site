import styles from './membershipPricingTable.module.css';

function Table({ columns, data }) {
    // Explicit mapping of column names to keys in the data
    const columnKeyMap = {
        "Club": "club",
        "Membership Type": "membershipType",
        "Full Price": "fullPrice",
        "Pensioner Price": "pensionerPrice",
        "Junior Price": "juniorPrice"
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
