import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import FindNumberOfSubarraysPY from '@code/python/hash_map/find_number_of_subarrays.py?raw'
import SlidingWindowPY from '@code/python/hash_map/sliding_window.py?raw'

import FindNumberOfSubarraysJS from '@code/javascript/hash_map/find_number_of_subarrays.js?raw'
import SlidingWindowJS from '@code/javascript/hash_map/sliding_window.js?raw'

import FindNumberOfSubarraysJAVA from '@code/java/hash_map/find_number_of_subarrays.java?raw'
import SlidingWindowJAVA from '@code/java/hash_map/sliding_window.java?raw'

import FindNumberOfSubarraysCPP from '@code/cpp/hash_map/find_number_of_subarrays.cpp?raw'
import SlidingWindowCPP from '@code/cpp/hash_map/sliding_window.cpp?raw'

import FindNumberOfSubarraysRuby from '@code/ruby/hash_map/find_number_of_subarrays.rb?raw'
import SlidingWindowRuby from '@code/ruby/hash_map/sliding_window.rb?raw'

export default function HashMap() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Hash Map</h2>
            <section id="hashmap-find-number-of-subarrays">
                <Tabs title="find number of subarrays that fit an exact criteria">
                    <Tabs.Tab code={FindNumberOfSubarraysPY} language="python" />
                    <Tabs.Tab code={FindNumberOfSubarraysJS} language="javascript" />
                    <Tabs.Tab code={FindNumberOfSubarraysJAVA} language="java" />
                    <Tabs.Tab code={FindNumberOfSubarraysCPP} language="cpp" />
                    <Tabs.Tab code={FindNumberOfSubarraysRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="hashmap-sliding-window">
                <Tabs title="sliding window">
                    <Tabs.Tab code={SlidingWindowPY} language="python" />
                    <Tabs.Tab code={SlidingWindowJS} language="javascript" />
                    <Tabs.Tab code={SlidingWindowJAVA} language="java" />
                    <Tabs.Tab code={SlidingWindowCPP} language="cpp" />
                    <Tabs.Tab code={SlidingWindowRuby} language="ruby" />
                </Tabs>
            </section>
        </div>
    )
}
