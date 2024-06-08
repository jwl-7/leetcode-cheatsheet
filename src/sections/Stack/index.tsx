import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import MonotonicIncreasingStackPY from '@code/python/stack/monotonic_increasing.py?raw'
import MonotonicDecreasingStackPY from '@code/python/stack/monotonic_decreasing.py?raw'

import MonotonicIncreasingStackJS from '@code/javascript/stack/monotonic_increasing.js?raw'
import MonotonicDecreasingStackJS from '@code/javascript/stack/monotonic_decreasing.js?raw'

import MonotonicIncreasingStackJAVA from '@code/java/stack/monotonic_increasing.java?raw'
import MonotonicDecreasingStackJAVA from '@code/java/stack/monotonic_decreasing.java?raw'

import MonotonicIncreasingStackCPP from '@code/cpp/stack/monotonic_increasing.cpp?raw'
import MonotonicDecreasingStackCPP from '@code/cpp/stack/monotonic_decreasing.cpp?raw'


export default function Stack() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Stack</h2>
            <section id="stack-monotonic-increasing">
                <Tabs title="monotonic increasing stack">
                    <Tabs.Tab code={MonotonicIncreasingStackPY} language="python" />
                    <Tabs.Tab code={MonotonicIncreasingStackJS} language="javascript" />
                    <Tabs.Tab code={MonotonicIncreasingStackJAVA} language="java" />
                    <Tabs.Tab code={MonotonicIncreasingStackCPP} language="cpp" />
                </Tabs>
            </section>
            <section id="stack-monotonic-decreasing">
                <Tabs title="monotonic decreasing stack">
                    <Tabs.Tab code={MonotonicDecreasingStackPY} language="python" />
                    <Tabs.Tab code={MonotonicDecreasingStackJS} language="javascript" />
                    <Tabs.Tab code={MonotonicDecreasingStackJAVA} language="java" />
                    <Tabs.Tab code={MonotonicDecreasingStackCPP} language="cpp" />
                </Tabs>
            </section>
        </div>
    )
}
