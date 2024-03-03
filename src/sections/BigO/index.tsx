import styles from '@sections/section.module.sass'

import Chart from './Chart'
import OperationsTable from './OperationsTable'


export default function BigO() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Big O</h2>
            <Chart />
            <OperationsTable />
        </div>
    )
}
