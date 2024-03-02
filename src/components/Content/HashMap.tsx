import styles from './content.module.sass'

import Tabs from '@components/Tabs'

import NumberOfSubarraysPY from '@code/python/hash_map/number_of_subarrays.py?raw'
import NumberOfSubarraysJS from '@code/javascript/hash_map/number_of_subarrays.js?raw'


export default function HashMap() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Hash Map</h2>
            <section id="hashmap-number-of-subarrays">
                <Tabs title="find number of subarrays that fit an exact criteria">
                    <Tabs.Tab code={NumberOfSubarraysPY} language="python" />
                    <Tabs.Tab code={NumberOfSubarraysJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
