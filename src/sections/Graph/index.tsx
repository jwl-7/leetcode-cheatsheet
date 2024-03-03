import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import DFSrecursivePY from '@code/python/graph/dfs_recursive.py?raw'
import DFSiterativePY from '@code/python/graph/dfs_iterative.py?raw'
import BFSPY from '@code/python/graph/bfs.py?raw'
import DijkstraPY from '@code/python/graph/dijkstra.py?raw'

import DFSrecursiveJS from '@code/javascript/graph/dfs_recursive.js?raw'
import DFSiterativeJS from '@code/javascript/graph/dfs_iterative.js?raw'
import BFSJS from '@code/javascript/graph/bfs.js?raw'
import DijkstraJS from '@code/javascript/graph/dijkstra.js?raw'


export default function Graph() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Graph</h2>
            <section id="graph-dfs-recursive">
                <Tabs title="DFS (recursive)">
                    <Tabs.Tab code={DFSrecursivePY} language="python" />
                    <Tabs.Tab code={DFSrecursiveJS} language="javascript" />
                </Tabs>
            </section>
            <section id="graph-dfs-iterative">
                <Tabs title="DFS (iterative)">
                    <Tabs.Tab code={DFSiterativePY} language="python" />
                    <Tabs.Tab code={DFSiterativeJS} language="javascript" />
                </Tabs>
            </section>
            <section id="graph-bfs">
                <Tabs title="BFS">
                    <Tabs.Tab code={BFSPY} language="python" />
                    <Tabs.Tab code={BFSJS} language="javascript" />
                </Tabs>
            </section>
            <section id="graph-dijkstra">
                <Tabs title="Dijkstra">
                    <Tabs.Tab code={DijkstraPY} language="python" />
                    <Tabs.Tab code={DijkstraJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
