import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import ArrayPY from '@code/python/data_structures/array.py?raw'
import BinaryTreePY from '@code/python/data_structures/binary_tree.py?raw'
import BinarySearchTreePY from '@code/python/data_structures/binary_search_tree.py?raw'
import LinkedListPY from '@code/python/data_structures/linked_list.py?raw'
import DoublyLinkedLisPY from '@code/python/data_structures/doubly_linked_list.py?raw'
import GraphPY from '@code/python/data_structures/graph.py?raw'
import HashMapPY from '@code/python/data_structures/hash_map.py?raw'
import TriePY from '@code/python/data_structures/trie.py?raw'
import UnionFindPY from '@code/python/data_structures/union_find.py?raw'
import UnionFindOptimizedPY from '@code/python/data_structures/union_find_optimized.py?raw'


export default function DataStructures() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Data Structures</h2>
            <section id="ds-array">
                <Tabs title="array">
                    <Tabs.Tab code={ArrayPY} language="python" />
                </Tabs>
            </section>
            <section id="ds-hash-map">
                <Tabs title="hash map">
                    <Tabs.Tab code={HashMapPY} language="python" />
                </Tabs>
            </section>
            <section id="ds-linked-list">
                <Tabs title="linked list">
                    <Tabs.Tab code={LinkedListPY} language="python" />
                </Tabs>
            </section>
            <section id="ds-doubly-linked-list">
                <Tabs title="doubly linked list">
                    <Tabs.Tab code={DoublyLinkedLisPY} language="python" />
                </Tabs>
            </section>
            <section id="ds-binary-tree">
                <Tabs title="binary tree">
                    <Tabs.Tab code={BinaryTreePY} language="python" />
                </Tabs>
            </section>
            <section id="ds-binary-search-tree">
                <Tabs title="binary search tree">
                    <Tabs.Tab code={BinarySearchTreePY} language="python" />
                </Tabs>
            </section>
            <section id="ds-graph">
                <Tabs title="graph">
                    <Tabs.Tab code={GraphPY} language="python" />
                </Tabs>
            </section>
            <section id="ds-union-find">
                <Tabs title="union find">
                    <Tabs.Tab code={UnionFindPY} language="python" />
                </Tabs>
            </section>
            <section id="ds-union-find-optimized">
                <Tabs title="union find optimized">
                    <Tabs.Tab code={UnionFindOptimizedPY} language="python" />
                </Tabs>
            </section>
            <section id="ds-trie">
                <Tabs title="trie">
                    <Tabs.Tab code={TriePY} language="python" />
                </Tabs>
            </section>
        </div>
    )
}
