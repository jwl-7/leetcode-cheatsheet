import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import DFSrecursivePY from '@code/python/graph/dfs_recursive.py?raw'
import DFSiterativePY from '@code/python/graph/dfs_iterative.py?raw'
import BFSPY from '@code/python/graph/bfs.py?raw'
import DijkstraPY from '@code/python/graph/dijkstra.py?raw'
import BellmanFordPY from '@code/python/graph/bellman_ford.py?raw'
import KahnPY from '@code/python/graph/kahn.py?raw'
import KruskalPY from '@code/python/graph/kruskal.py?raw'
import PrimPY from '@code/python/graph/prim.py?raw'

import DFSrecursiveJS from '@code/javascript/graph/dfs_recursive.js?raw'
import DFSiterativeJS from '@code/javascript/graph/dfs_iterative.js?raw'
import BFSJS from '@code/javascript/graph/bfs.js?raw'
import DijkstraJS from '@code/javascript/graph/dijkstra.js?raw'
import BellmanFordJS from '@code/javascript/graph/bellman_ford.js?raw'
import KahnJS from '@code/javascript/graph/kahn.js?raw'
import KruskalJS from '@code/javascript/graph/kruskal.js?raw'
import PrimJS from '@code/javascript/graph/prim.js?raw'

import DFSrecursiveJAVA from '@code/java/graph/dfs_recursive.java?raw'
import DFSiterativeJAVA from '@code/java/graph/dfs_iterative.java?raw'
import BFSJAVA from '@code/java/graph/bfs.java?raw'
import DijkstraJAVA from '@code/java/graph/dijkstra.java?raw'
import BellmanFordJAVA from '@code/java/graph/bellman_ford.java?raw'
import KahnJAVA from '@code/java/graph/kahn.java?raw'
import KruskalJAVA from '@code/java/graph/kruskal.java?raw'
import PrimJAVA from '@code/java/graph/prim.java?raw'

import DFSrecursiveCPP from '@code/cpp/graph/dfs_recursive.cpp?raw'
import DFSiterativeCPP from '@code/cpp/graph/dfs_iterative.cpp?raw'
import BFSCPP from '@code/cpp/graph/bfs.cpp?raw'
import DijkstraCPP from '@code/cpp/graph/dijkstra.cpp?raw'
import BellmanFordCPP from '@code/cpp/graph/bellman_ford.cpp?raw'
import KahnCPP from '@code/cpp/graph/kahn.cpp?raw'
import KruskalCPP from '@code/cpp/graph/kruskal.cpp?raw'
import PrimCPP from '@code/cpp/graph/prim.cpp?raw'

import DFSrecursiveRuby from '@code/ruby/graph/dfs_recursive.rb?raw'
import DFSiterativeRuby from '@code/ruby/graph/dfs_iterative.rb?raw'
import BFSRuby from '@code/ruby/graph/bfs.rb?raw'
import DijkstraRuby from '@code/ruby/graph/dijkstra.rb?raw'
import BellmanFordRuby from '@code/ruby/graph/bellman_ford.rb?raw'
import KahnRuby from '@code/ruby/graph/kahn.rb?raw'
import KruskalRuby from '@code/ruby/graph/kruskal.rb?raw'
import PrimRuby from '@code/ruby/graph/prim.rb?raw'

export default function Graph() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Graph</h2>
            <section id="graph-dfs-recursive">
                <Tabs title="DFS (recursive)">
                    <Tabs.Tab code={DFSrecursivePY} language="python" />
                    <Tabs.Tab code={DFSrecursiveJS} language="javascript" />
                    <Tabs.Tab code={DFSrecursiveJAVA} language="java" />
                    <Tabs.Tab code={DFSrecursiveCPP} language="cpp" />
                    <Tabs.Tab code={DFSrecursiveRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="graph-dfs-iterative">
                <Tabs title="DFS (iterative)">
                    <Tabs.Tab code={DFSiterativePY} language="python" />
                    <Tabs.Tab code={DFSiterativeJS} language="javascript" />
                    <Tabs.Tab code={DFSiterativeJAVA} language="java" />
                    <Tabs.Tab code={DFSiterativeCPP} language="cpp" />
                    <Tabs.Tab code={DFSiterativeRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="graph-bfs">
                <Tabs title="BFS">
                    <Tabs.Tab code={BFSPY} language="python" />
                    <Tabs.Tab code={BFSJS} language="javascript" />
                    <Tabs.Tab code={BFSJAVA} language="java" />
                    <Tabs.Tab code={BFSCPP} language="cpp" />
                    <Tabs.Tab code={BFSRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="graph-dijkstra">
                <Tabs title="Dijkstra (shortest path)">
                    <Tabs.Tab code={DijkstraPY} language="python" />
                    <Tabs.Tab code={DijkstraJS} language="javascript" />
                    <Tabs.Tab code={DijkstraJAVA} language="java" />
                    <Tabs.Tab code={DijkstraCPP} language="cpp" />
                    <Tabs.Tab code={DijkstraRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="graph-bellman-ford">
                <Tabs title="Bellman-Ford (shortest path)">
                    <Tabs.Tab code={BellmanFordPY} language="python" />
                    <Tabs.Tab code={BellmanFordJS} language="javascript" />
                    <Tabs.Tab code={BellmanFordJAVA} language="java" />
                    <Tabs.Tab code={BellmanFordCPP} language="cpp" />
                    <Tabs.Tab code={BellmanFordRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="graph-kahn">
                <Tabs title="Kahn (topological sort)">
                    <Tabs.Tab code={KahnPY} language="python" />
                    <Tabs.Tab code={KahnJS} language="javascript" />
                    <Tabs.Tab code={KahnJAVA} language="java" />
                    <Tabs.Tab code={KahnCPP} language="cpp" />
                    <Tabs.Tab code={KahnRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="graph-kruskal">
                <Tabs title="Kruskal (mst)">
                    <Tabs.Tab code={KruskalPY} language="python" />
                    <Tabs.Tab code={KruskalJS} language="javascript" />
                    <Tabs.Tab code={KruskalJAVA} language="java" />
                    <Tabs.Tab code={KruskalCPP} language="cpp" />
                    <Tabs.Tab code={KruskalRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="graph-prim">
                <Tabs title="Prim (mst)">
                    <Tabs.Tab code={PrimPY} language="python" />
                    <Tabs.Tab code={PrimJS} language="javascript" />
                    <Tabs.Tab code={PrimJAVA} language="java" />
                    <Tabs.Tab code={PrimCPP} language="cpp" />
                    <Tabs.Tab code={PrimRuby} language="ruby" />
                </Tabs>
            </section>
        </div>
    )
}
