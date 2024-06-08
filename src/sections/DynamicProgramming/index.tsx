import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import TopDownPY from '@code/python/dynamic_programming/top_down.py?raw'
import BottomUpPY from '@code/python/dynamic_programming/bottom_up.py?raw'
import KadanePY from '@code/python/dynamic_programming/kadane.py?raw'

import TopDownJS from '@code/javascript/dynamic_programming/top_down.js?raw'
import BottomUpJS from '@code/javascript/dynamic_programming/bottom_up.js?raw'
import KadaneJS from '@code/javascript/dynamic_programming/kadane.js?raw'

import TopDownJAVA from '@code/java/dynamic_programming/top_down.java?raw'
import BottomUpJAVA from '@code/java/dynamic_programming/bottom_up.java?raw'
import KadaneJAVA from '@code/java/dynamic_programming/kadane.java?raw'

import TopDownCPP from '@code/cpp/dynamic_programming/top_down.cpp?raw'
import BottomUpCPP from '@code/cpp/dynamic_programming/bottom_up.cpp?raw'
import KadaneCPP from '@code/cpp/dynamic_programming/kadane.cpp?raw'


export default function DynamicProgramming() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Dynamic Programming</h2>
            <section id="dp-top-down">
                <Tabs title="DP top-down">
                    <Tabs.Tab code={TopDownPY} language="python" />
                    <Tabs.Tab code={TopDownJS} language="javascript" />
                    <Tabs.Tab code={TopDownJAVA} language="java" />
                    <Tabs.Tab code={TopDownCPP} language="cpp" />
                </Tabs>
            </section>
            <section id="dp-bottom-up">
                <Tabs title="DP bottom-up">
                    <Tabs.Tab code={BottomUpPY} language="python" />
                    <Tabs.Tab code={BottomUpJS} language="javascript" />
                    <Tabs.Tab code={BottomUpJAVA} language="java" />
                    <Tabs.Tab code={BottomUpCPP} language="cpp" />
                </Tabs>
            </section>
            <section id="dp-kadane">
                <Tabs title="Kadane (max-sum subarray)">
                    <Tabs.Tab code={KadanePY} language="python" />
                    <Tabs.Tab code={KadaneJS} language="javascript" />
                    <Tabs.Tab code={KadaneJAVA} language="java" />
                    <Tabs.Tab code={KadaneCPP} language="cpp" />
                </Tabs>
            </section>
        </div>
    )
}
