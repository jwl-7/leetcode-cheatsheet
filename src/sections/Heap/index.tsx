import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import FindTopKElementsPY from '@code/python/heap/find_top_k_elements.py?raw'
import FindTopKElementsJS from '@code/javascript/heap/find_top_k_elements.js?raw'


export default function Heap() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Heap</h2>
            <section id="heap-find-top-k-elements">
                <Tabs title="find top k elements">
                    <Tabs.Tab code={FindTopKElementsPY} language="python" />
                    <Tabs.Tab code={FindTopKElementsJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
