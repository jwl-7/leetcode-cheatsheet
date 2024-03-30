import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import MonotonicIncreasingStackPY from '@code/python/stack/monotonic_increasing.py?raw'
import MonotonicDecreasingStackPY from '@code/python/stack/monotonic_decreasing.py?raw'

import MonotonicIncreasingStackJS from '@code/javascript/stack/monotonic_increasing.js?raw'
import MonotonicDecreasingStackJS from '@code/javascript/stack/monotonic_decreasing.js?raw'


export default function Stack() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Stack</h2>
            <section id="stack-monotonic-increasing">
                <Tabs title="monotonic increasing stack">
                    <Tabs.Tab code={MonotonicIncreasingStackPY} language="python" />
                    <Tabs.Tab code={MonotonicIncreasingStackJS} language="javascript" />
                </Tabs>
            </section>
            <section id="stack-monotonic-decreasing">
                <Tabs title="monotonic decreasing stack">
                    <Tabs.Tab code={MonotonicDecreasingStackPY} language="python" />
                    <Tabs.Tab code={MonotonicDecreasingStackJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
