import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import FindNumberOfSubarraysPY from '@code/python/hash_map/find_number_of_subarrays.py?raw'
import FindNumberOfSubarraysJS from '@code/javascript/hash_map/find_number_of_subarrays.js?raw'


export default function HashMap() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Hash Map</h2>
            <section id="hashmap-find-number-of-subarrays">
                <Tabs title="find number of subarrays that fit an exact criteria">
                    <Tabs.Tab code={FindNumberOfSubarraysPY} language="python" />
                    <Tabs.Tab code={FindNumberOfSubarraysJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
