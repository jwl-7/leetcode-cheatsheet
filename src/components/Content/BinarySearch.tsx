import styles from './content.module.sass'

import Tabs from '@components/Tabs'

import BinarySearchPY from '@code/python/binary_search/binary_search.py?raw'
import DuplicateElementsLeftInsertionPY from '@code/python/binary_search/duplicate_elements_left_insertion.py?raw'
import DuplicateElementsRightInsertionPY from '@code/python/binary_search/duplicate_elements_right_insertion.py?raw'
import GreedyMinimumPY from '@code/python/binary_search/greedy_minimum.py?raw'
import GreedyMaximumPY from '@code/python/binary_search/greedy_maximum.py?raw'

import BinarySearchJS from '@code/javascript/binary_search/binary_search.js?raw'
import DuplicateElementsLeftInsertionJS from '@code/javascript/binary_search/duplicate_elements_left_insertion.js?raw'
import DuplicateElementsRightInsertionJS from '@code/javascript/binary_search/duplicate_elements_right_insertion.js?raw'
import GreedyMinimumJS from '@code/javascript/binary_search/greedy_minimum.js?raw'
import GreedyMaximumJS from '@code/javascript/binary_search/greedy_maximum.js?raw'


export default function BinarySearch() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Binary Search</h2>
            <section id="binarysearch-binary-search">
                <Tabs title="binary search">
                    <Tabs.Tab code={BinarySearchPY} language="python" />
                    <Tabs.Tab code={BinarySearchJS} language="javascript" />
                </Tabs>
            </section>
            <section id="binarysearch-duplicate-elements-left-insertion">
                <Tabs title="duplicate elements, left-most insertion point">
                    <Tabs.Tab code={DuplicateElementsLeftInsertionPY} language="python" />
                    <Tabs.Tab code={DuplicateElementsLeftInsertionJS} language="javascript" />
                </Tabs>
            </section>
            <section id="binarysearch-duplicate-elements-right-insertion">
                <Tabs title="duplicate elements, right-most insertion point">
                    <Tabs.Tab code={DuplicateElementsRightInsertionPY} language="python" />
                    <Tabs.Tab code={DuplicateElementsRightInsertionJS} language="javascript" />
                </Tabs>
            </section>
            <section id="binarysearch-greedy-minimum">
                <Tabs title="greedy (minimum)">
                    <Tabs.Tab code={GreedyMinimumPY} language="python" />
                    <Tabs.Tab code={GreedyMinimumJS} language="javascript" />
                </Tabs>
            </section>
            <section id="binarysearch-greedy-maximum">
                <Tabs title="greedy (maximum)">
                    <Tabs.Tab code={GreedyMaximumPY} language="python" />
                    <Tabs.Tab code={GreedyMaximumJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
