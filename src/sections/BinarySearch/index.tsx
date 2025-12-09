import styles from '@sections/section.module.sass'

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

import BinarySearchJAVA from '@code/java/binary_search/binary_search.java?raw'
import DuplicateElementsLeftInsertionJAVA from '@code/java/binary_search/duplicate_elements_left_insertion.java?raw'
import DuplicateElementsRightInsertionJAVA from '@code/java/binary_search/duplicate_elements_right_insertion.java?raw'
import GreedyMinimumJAVA from '@code/java/binary_search/greedy_minimum.java?raw'
import GreedyMaximumJAVA from '@code/java/binary_search/greedy_maximum.java?raw'

import BinarySearchCPP from '@code/cpp/binary_search/binary_search.cpp?raw'
import DuplicateElementsLeftInsertionCPP from '@code/cpp/binary_search/duplicate_elements_left_insertion.cpp?raw'
import DuplicateElementsRightInsertionCPP from '@code/cpp/binary_search/duplicate_elements_right_insertion.cpp?raw'
import GreedyMinimumCPP from '@code/cpp/binary_search/greedy_minimum.cpp?raw'
import GreedyMaximumCPP from '@code/cpp/binary_search/greedy_maximum.cpp?raw'

import BinarySearchRuby from '@code/ruby/binary_search/binary_search.rb?raw'
import DuplicateElementsLeftInsertionRuby from '@code/ruby/binary_search/duplicate_elements_left_insertion.rb?raw'
import DuplicateElementsRightInsertionRuby from '@code/ruby/binary_search/duplicate_elements_right_insertion.rb?raw'
import GreedyMinimumRuby from '@code/ruby/binary_search/greedy_minimum.rb?raw'
import GreedyMaximumRuby from '@code/ruby/binary_search/greedy_maximum.rb?raw'

export default function BinarySearch() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Binary Search</h2>
            <section id="binarysearch-binary-search">
                <Tabs title="binary search">
                    <Tabs.Tab code={BinarySearchPY} language="python" />
                    <Tabs.Tab code={BinarySearchJS} language="javascript" />
                    <Tabs.Tab code={BinarySearchJAVA} language="java" />
                    <Tabs.Tab code={BinarySearchCPP} language="cpp" />
                    <Tabs.Tab code={BinarySearchRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="binarysearch-duplicate-elements-left-insertion">
                <Tabs title="duplicate elements, left-most insertion point">
                    <Tabs.Tab code={DuplicateElementsLeftInsertionPY} language="python" />
                    <Tabs.Tab code={DuplicateElementsLeftInsertionJS} language="javascript" />
                    <Tabs.Tab code={DuplicateElementsLeftInsertionJAVA} language="java" />
                    <Tabs.Tab code={DuplicateElementsLeftInsertionCPP} language="cpp" />
                    <Tabs.Tab code={DuplicateElementsLeftInsertionRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="binarysearch-duplicate-elements-right-insertion">
                <Tabs title="duplicate elements, right-most insertion point">
                    <Tabs.Tab code={DuplicateElementsRightInsertionPY} language="python" />
                    <Tabs.Tab code={DuplicateElementsRightInsertionJS} language="javascript" />
                    <Tabs.Tab code={DuplicateElementsRightInsertionJAVA} language="java" />
                    <Tabs.Tab code={DuplicateElementsRightInsertionCPP} language="cpp" />
                    <Tabs.Tab code={DuplicateElementsRightInsertionRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="binarysearch-greedy-minimum">
                <Tabs title="greedy (minimum)">
                    <Tabs.Tab code={GreedyMinimumPY} language="python" />
                    <Tabs.Tab code={GreedyMinimumJS} language="javascript" />
                    <Tabs.Tab code={GreedyMinimumJAVA} language="java" />
                    <Tabs.Tab code={GreedyMinimumCPP} language="cpp" />
                    <Tabs.Tab code={GreedyMinimumRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="binarysearch-greedy-maximum">
                <Tabs title="greedy (maximum)">
                    <Tabs.Tab code={GreedyMaximumPY} language="python" />
                    <Tabs.Tab code={GreedyMaximumJS} language="javascript" />
                    <Tabs.Tab code={GreedyMaximumJAVA} language="java" />
                    <Tabs.Tab code={GreedyMaximumCPP} language="cpp" />
                    <Tabs.Tab code={GreedyMaximumRuby} language="ruby" />
                </Tabs>
            </section>
        </div>
    )
}
