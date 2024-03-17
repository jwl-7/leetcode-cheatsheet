import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import BogoSortPY from '@code/python/sorting_algorithms/bogo_sort.py?raw'
import BubbleSortPY from '@code/python/sorting_algorithms/bubble_sort.py?raw'
import BucketSortPY from '@code/python/sorting_algorithms/bucket_sort.py?raw'
import CountingSortPY from '@code/python/sorting_algorithms/counting_sort.py?raw'
import CubeSortPY from '@code/python/sorting_algorithms/cube_sort.py?raw'
import HeapSortPY from '@code/python/sorting_algorithms/heap_sort.py?raw'
import InsertionSortPY from '@code/python/sorting_algorithms/insertion_sort.py?raw'
import MergeSortPY from '@code/python/sorting_algorithms/merge_sort.py?raw'
import PancakeSortPY from '@code/python/sorting_algorithms/pancake_sort.py?raw'
import QuickSortPY from '@code/python/sorting_algorithms/quick_sort.py?raw'
import RadixSortPY from '@code/python/sorting_algorithms/radix_sort.py?raw'
import SelectionSortPY from '@code/python/sorting_algorithms/selection_sort.py?raw'
import ShellSortPY from '@code/python/sorting_algorithms/shell_sort.py?raw'
import SleepSortPY from '@code/python/sorting_algorithms/sleep_sort.py?raw'
import TimSortPY from '@code/python/sorting_algorithms/tim_sort.py?raw'

import BogoSortJS from '@code/javascript/sorting_algorithms/bogo_sort.js?raw'
import BubbleSortJS from '@code/javascript/sorting_algorithms/bubble_sort.js?raw'
import BucketSortJS from '@code/javascript/sorting_algorithms/bucket_sort.js?raw'
import CountingSortJS from '@code/javascript/sorting_algorithms/counting_sort.js?raw'
import CubeSortJS from '@code/javascript/sorting_algorithms/cube_sort.js?raw'
import HeapSortJS from '@code/javascript/sorting_algorithms/heap_sort.js?raw'
import InsertionSortJS from '@code/javascript/sorting_algorithms/insertion_sort.js?raw'
import MergeSortJS from '@code/javascript/sorting_algorithms/merge_sort.js?raw'
import PancakeSortJS from '@code/javascript/sorting_algorithms/pancake_sort.js?raw'
import QuickSortJS from '@code/javascript/sorting_algorithms/quick_sort.js?raw'
import RadixSortJS from '@code/javascript/sorting_algorithms/radix_sort.js?raw'
import SelectionSortJS from '@code/javascript/sorting_algorithms/selection_sort.js?raw'
import ShellSortJS from '@code/javascript/sorting_algorithms/shell_sort.js?raw'
import SleepSortJS from '@code/javascript/sorting_algorithms/sleep_sort.js?raw'
import TimSortJS from '@code/javascript/sorting_algorithms/tim_sort.js?raw'


export default function Stack() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Sorting Algorithms</h2>
            <section id="sort-bubble">
                <Tabs title="bubble sort">
                    <Tabs.Tab code={BubbleSortPY} language="python" />
                    <Tabs.Tab code={BubbleSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-selection">
                <Tabs title="selection sort">
                    <Tabs.Tab code={SelectionSortPY} language="python" />
                    <Tabs.Tab code={SelectionSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-insertion">
                <Tabs title="insertion sort">
                    <Tabs.Tab code={InsertionSortPY} language="python" />
                    <Tabs.Tab code={InsertionSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-shell">
                <Tabs title="shell sort">
                    <Tabs.Tab code={ShellSortPY} language="python" />
                    <Tabs.Tab code={ShellSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-merge">
                <Tabs title="merge sort">
                    <Tabs.Tab code={MergeSortPY} language="python" />
                    <Tabs.Tab code={MergeSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-quick">
                <Tabs title="quick sort">
                    <Tabs.Tab code={QuickSortPY} language="python" />
                    <Tabs.Tab code={QuickSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-tim">
                <Tabs title="timsort">
                    <Tabs.Tab code={TimSortPY} language="python" />
                    <Tabs.Tab code={TimSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-heap">
                <Tabs title="heap sort">
                    <Tabs.Tab code={HeapSortPY} language="python" />
                    <Tabs.Tab code={HeapSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-counting">
                <Tabs title="counting sort">
                    <Tabs.Tab code={CountingSortPY} language="python" />
                    <Tabs.Tab code={CountingSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-bucket">
                <Tabs title="bucket sort">
                    <Tabs.Tab code={BucketSortPY} language="python" />
                    <Tabs.Tab code={BucketSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-radix">
                <Tabs title="radix sort">
                    <Tabs.Tab code={RadixSortPY} language="python" />
                    <Tabs.Tab code={RadixSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-cube">
                <Tabs title="cubesort">
                    <Tabs.Tab code={CubeSortPY} language="python" />
                    <Tabs.Tab code={CubeSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-bogo">
                <Tabs title="bogo sort">
                    <Tabs.Tab code={BogoSortPY} language="python" />
                    <Tabs.Tab code={BogoSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-pancake">
                <Tabs title="pancake sort">
                    <Tabs.Tab code={PancakeSortPY} language="python" />
                    <Tabs.Tab code={PancakeSortJS} language="javascript" />
                </Tabs>
            </section>
            <section id="sort-sleep">
                <Tabs title="sleep sort">
                    <Tabs.Tab code={SleepSortPY} language="python" />
                    <Tabs.Tab code={SleepSortJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
