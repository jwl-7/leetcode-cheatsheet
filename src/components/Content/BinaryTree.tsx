import styles from './content.module.sass'

import Tabs from '@components/Tabs'

import DFSrecursivePY from '@code/python/binary_tree/dfs_recursive.py?raw'
import DFSiterativePY from '@code/python/binary_tree/dfs_iterative.py?raw'
import BFSPY from '@code/python/binary_tree/bfs.py?raw'

import DFSrecursiveJS from '@code/javascript/binary_tree/dfs_recursive.js?raw'
import DFSiterativeJS from '@code/javascript/binary_tree/dfs_iterative.js?raw'
import BFSJS from '@code/javascript/binary_tree/bfs.js?raw'


export default function BinaryTree() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Binary Tree</h2>
            <section id="tree-dfs-recursive">
                <Tabs title="DFS (recursive)">
                    <Tabs.Tab code={DFSrecursivePY} language="python" />
                    <Tabs.Tab code={DFSrecursiveJS} language="javascript" />
                </Tabs>
            </section>
            <section id="tree-dfs-iterative">
                <Tabs title="DFS (iterative)">
                    <Tabs.Tab code={DFSiterativePY} language="python" />
                    <Tabs.Tab code={DFSiterativeJS} language="javascript" />
                </Tabs>
            </section>
            <section id="tree-bfs">
                <Tabs title="BFS">
                    <Tabs.Tab code={BFSPY} language="python" />
                    <Tabs.Tab code={BFSJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
