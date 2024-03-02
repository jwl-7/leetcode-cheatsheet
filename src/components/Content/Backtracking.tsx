import styles from './content.module.sass'

import Tabs from '@components/Tabs'

import BacktrackingPY from '@code/python/backtracking/backtracking.py?raw'
import BacktrackingJS from '@code/javascript/backtracking/backtracking.js?raw'


export default function Backtracking() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Backtracking</h2>
            <section id="backtracking-backtracking">
                <Tabs title="backtracking">
                    <Tabs.Tab code={BacktrackingPY} language="python" />
                    <Tabs.Tab code={BacktrackingJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
