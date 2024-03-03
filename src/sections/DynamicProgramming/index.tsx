import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import TopDownPY from '@code/python/dynamic_programming/top_down.py?raw'
import BottomUpPY from '@code/python/dynamic_programming/bottom_up.py?raw'

import TopDownJS from '@code/javascript/dynamic_programming/top_down.js?raw'
import BottomUpJS from '@code/javascript/dynamic_programming/bottom_up.js?raw'


export default function DynamicProgramming() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Dynamic Programming</h2>
            <section id="dp-top-down">
                <Tabs title="DP top-down">
                    <Tabs.Tab code={TopDownPY} language="python" />
                    <Tabs.Tab code={TopDownJS} language="javascript" />
                </Tabs>
            </section>
            <section id="dp-bottom-up">
                <Tabs title="DP bottom-up">
                    <Tabs.Tab code={BottomUpPY} language="python" />
                    <Tabs.Tab code={BottomUpJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
