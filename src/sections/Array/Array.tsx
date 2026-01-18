import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs/Tabs'

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

import TwoPointersOneInputJAVA from '@code/java/array/two_pointers_one_input.java?raw'
import TwoPointersTwoInputsJAVA from '@code/java/array/two_pointers_two_inputs.java?raw'
import SlidingWindowJAVA from '@code/java/array/sliding_window.java?raw'
import PrefixSumJAVA from '@code/java/array/prefix_sum.java?raw'
import StringBuildingJAVA from '@code/java/array/string_building.java?raw'

import TwoPointersOneInputCPP from '@code/cpp/array/two_pointers_one_input.cpp?raw'
import TwoPointersTwoInputsCPP from '@code/cpp/array/two_pointers_two_inputs.cpp?raw'
import SlidingWindowCPP from '@code/cpp/array/sliding_window.cpp?raw'
import PrefixSumCPP from '@code/cpp/array/prefix_sum.cpp?raw'
import StringBuildingCPP from '@code/cpp/array/string_building.cpp?raw'

import TwoPointersOneInputRuby from '@code/ruby/array/two_pointers_one_input.rb?raw'
import TwoPointersTwoInputsRuby from '@code/ruby/array/two_pointers_two_inputs.rb?raw'
import SlidingWindowRuby from '@code/ruby/array/sliding_window.rb?raw'
import PrefixSumRuby from '@code/ruby/array/prefix_sum.rb?raw'
import StringBuildingRuby from '@code/ruby/array/string_building.rb?raw'

export default function Array() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Array</h2>
            <section id="array-two-pointers-one-input">
                <Tabs title="two pointers: one input, opposite ends">
                    <Tabs.Tab code={TwoPointersOneInputPY} language="python" />
                    <Tabs.Tab code={TwoPointersOneInputJS} language="javascript" />
                    <Tabs.Tab code={TwoPointersOneInputJAVA} language="java" />
                    <Tabs.Tab code={TwoPointersOneInputCPP} language="cpp" />
                    <Tabs.Tab code={TwoPointersOneInputRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="array-two-pointers-two-inputs">
                <Tabs title="two pointers: two inputs, exhaust both">
                    <Tabs.Tab code={TwoPointersTwoInputsPY} language="python" />
                    <Tabs.Tab code={TwoPointersTwoInputsJS} language="javascript" />
                    <Tabs.Tab code={TwoPointersTwoInputsJAVA} language="java" />
                    <Tabs.Tab code={TwoPointersTwoInputsCPP} language="cpp" />
                    <Tabs.Tab code={TwoPointersTwoInputsRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="array-sliding-window">
                <Tabs title="sliding window">
                    <Tabs.Tab code={SlidingWindowPY} language="python" />
                    <Tabs.Tab code={SlidingWindowJS} language="javascript" />
                    <Tabs.Tab code={SlidingWindowJAVA} language="java" />
                    <Tabs.Tab code={SlidingWindowCPP} language="cpp" />
                    <Tabs.Tab code={SlidingWindowRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="array-prefix-sum">
                <Tabs title="prefix sum">
                    <Tabs.Tab code={PrefixSumPY} language="python" />
                    <Tabs.Tab code={PrefixSumJS} language="javascript" />
                    <Tabs.Tab code={PrefixSumJAVA} language="java" />
                    <Tabs.Tab code={PrefixSumCPP} language="cpp" />
                    <Tabs.Tab code={PrefixSumRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="array-string-building">
                <Tabs title="efficient string building">
                    <Tabs.Tab code={StringBuildingPY} language="python" />
                    <Tabs.Tab code={StringBuildingJS} language="javascript" />
                    <Tabs.Tab code={StringBuildingJAVA} language="java" />
                    <Tabs.Tab code={StringBuildingCPP} language="cpp" />
                    <Tabs.Tab code={StringBuildingRuby} language="ruby" />
                </Tabs>
            </section>
        </div>
    )
}
