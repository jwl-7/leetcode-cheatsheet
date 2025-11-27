import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import BacktrackingPY from '@code/python/backtracking/backtracking.py?raw'
import BacktrackingJS from '@code/javascript/backtracking/backtracking.js?raw'
import BacktrackingJAVA from '@code/java/backtracking/backtracking.java?raw'
import BacktrackingCPP from '@code/cpp/backtracking/backtracking.cpp?raw'
import BacktrackingRuby from '@code/ruby/backtracking/backtracking.rb?raw'


export default function Backtracking() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Backtracking</h2>
            <section id="backtracking-backtracking">
                <Tabs title="backtracking">
                    <Tabs.Tab code={BacktrackingPY} language="python" />
                    <Tabs.Tab code={BacktrackingJS} language="javascript" />
                    <Tabs.Tab code={BacktrackingJAVA} language="java" />
                    <Tabs.Tab code={BacktrackingCPP} language="cpp" />
                    <Tabs.Tab code={BacktrackingRuby} language="ruby" />
                </Tabs>
            </section>
        </div>
    )
}
