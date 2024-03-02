import styles from './content.module.sass'

import Tabs from '@components/Tabs'

import TwoPointersOneInputPY from '@code/python/array/two_pointers_one_input.py?raw'
import TwoPointersTwoInputsPY from '@code/python/array/two_pointers_two_inputs.py?raw'
import SlidingWindowPY from '@code/python/array/sliding_window.py?raw'
import PrefixSumPY from '@code/python/array/prefix_sum.py?raw'
import StringBuildingPY from '@code/python/array/string_building.py?raw'

import TwoPointersOneInputJS from '@code/javascript/array/two_pointers_one_input.js?raw'
import TwoPointersTwoInputsJS from '@code/javascript/array/two_pointers_two_inputs.js?raw'
import SlidingWindowJS from '@code/javascript/array/sliding_window.js?raw'
import PrefixSumJS from '@code/javascript/array/prefix_sum.js?raw'
import StringBuildingJS from '@code/javascript/array/string_building.js?raw'


export default function Array() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Array</h2>
            <section id="array-two-pointers-one-input">
                <Tabs title="two pointers: one input, opposite ends">
                    <Tabs.Tab code={TwoPointersOneInputPY} language="python" />
                    <Tabs.Tab code={TwoPointersOneInputJS} language="javascript" />
                </Tabs>
            </section>
            <section id="array-two-pointers-two-inputs">
                <Tabs title="two pointers: two inputs, exhaust both">
                    <Tabs.Tab code={TwoPointersTwoInputsPY} language="python" />
                    <Tabs.Tab code={TwoPointersTwoInputsJS} language="javascript" />
                </Tabs>
            </section>
            <section id="array-sliding-window">
                <Tabs title="sliding window">
                    <Tabs.Tab code={SlidingWindowPY} language="python" />
                    <Tabs.Tab code={SlidingWindowJS} language="javascript" />
                </Tabs>
            </section>
            <section id="array-prefix-sum">
                <Tabs title="prefix sum">
                    <Tabs.Tab code={PrefixSumPY} language="python" />
                    <Tabs.Tab code={PrefixSumJS} language="javascript" />
                </Tabs>
            </section>
            <section id="array-string-building">
                <Tabs title="efficient string building">
                    <Tabs.Tab code={StringBuildingPY} language="python" />
                    <Tabs.Tab code={StringBuildingJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
