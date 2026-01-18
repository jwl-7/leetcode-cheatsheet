import styles from '@sections/section.module.sass'

import Chart from './Chart'
import DataStructureOperationsTable from './DataStructureOperationsTable'
import SortingAlgorithmsTable from './SortingAlgorithmsTable'

export default function BigO() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Big O</h2>
            <Chart />
            <DataStructureOperationsTable />
            <SortingAlgorithmsTable />
        </div>
    )
}
