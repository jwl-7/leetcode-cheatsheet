import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import ArrayPY from '@code/python/data_structures/array.py?raw'
import BinaryTreePY from '@code/python/data_structures/binary_tree.py?raw'
import BinarySearchTreePY from '@code/python/data_structures/binary_search_tree.py?raw'
import LinkedListPY from '@code/python/data_structures/linked_list.py?raw'
import DoublyLinkedListPY from '@code/python/data_structures/doubly_linked_list.py?raw'
import GraphPY from '@code/python/data_structures/graph.py?raw'
import HashMapPY from '@code/python/data_structures/hash_map.py?raw'
import TriePY from '@code/python/data_structures/trie.py?raw'
import UnionFindPY from '@code/python/data_structures/union_find.py?raw'
import UnionFindOptimizedPY from '@code/python/data_structures/union_find_optimized.py?raw'

import ArrayJS from '@code/javascript/data_structures/array.js?raw'
import BinaryTreeJS from '@code/javascript/data_structures/binary_tree.js?raw'
import BinarySearchTreeJS from '@code/javascript/data_structures/binary_search_tree.js?raw'
import LinkedListJS from '@code/javascript/data_structures/linked_list.js?raw'
import DoublyLinkedListJS from '@code/javascript/data_structures/doubly_linked_list.js?raw'
import GraphJS from '@code/javascript/data_structures/graph.js?raw'
import HashMapJS from '@code/javascript/data_structures/hash_map.js?raw'
import TrieJS from '@code/javascript/data_structures/trie.js?raw'
import UnionFindJS from '@code/javascript/data_structures/union_find.js?raw'
import UnionFindOptimizedJS from '@code/javascript/data_structures/union_find_optimized.js?raw'


export default function DataStructures() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Data Structures</h2>
            <section id="ds-array">
                <Tabs title="array">
                    <Tabs.Tab code={ArrayPY} language="python" />
                    <Tabs.Tab code={ArrayJS} language="javascript" />
                </Tabs>
            </section>
            <section id="ds-hash-map">
                <Tabs title="hash map">
                    <Tabs.Tab code={HashMapPY} language="python" />
                    <Tabs.Tab code={HashMapJS} language="javascript" />
                </Tabs>
            </section>
            <section id="ds-linked-list">
                <Tabs title="linked list">
                    <Tabs.Tab code={LinkedListPY} language="python" />
                    <Tabs.Tab code={LinkedListJS} language="javascript" />
                </Tabs>
            </section>
            <section id="ds-doubly-linked-list">
                <Tabs title="doubly linked list">
                    <Tabs.Tab code={DoublyLinkedListPY} language="python" />
                    <Tabs.Tab code={DoublyLinkedListJS} language="javascript" />
                </Tabs>
            </section>
            <section id="ds-binary-tree">
                <Tabs title="binary tree">
                    <Tabs.Tab code={BinaryTreePY} language="python" />
                    <Tabs.Tab code={BinaryTreeJS} language="javascript" />
                </Tabs>
            </section>
            <section id="ds-binary-search-tree">
                <Tabs title="binary search tree">
                    <Tabs.Tab code={BinarySearchTreePY} language="python" />
                    <Tabs.Tab code={BinarySearchTreeJS} language="javascript" />
                </Tabs>
            </section>
            <section id="ds-graph">
                <Tabs title="graph">
                    <Tabs.Tab code={GraphPY} language="python" />
                    <Tabs.Tab code={GraphJS} language="javascript" />
                </Tabs>
            </section>
            <section id="ds-union-find">
                <Tabs title="union find">
                    <Tabs.Tab code={UnionFindPY} language="python" />
                    <Tabs.Tab code={UnionFindJS} language="javascript" />
                </Tabs>
            </section>
            <section id="ds-union-find-optimized">
                <Tabs title="union find optimized">
                    <Tabs.Tab code={UnionFindOptimizedPY} language="python" />
                    <Tabs.Tab code={UnionFindOptimizedJS} language="javascript" />
                </Tabs>
            </section>
            <section id="ds-trie">
                <Tabs title="trie">
                    <Tabs.Tab code={TriePY} language="python" />
                    <Tabs.Tab code={TrieJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
