import Accordion from '@components/Accordion'
import LinkWithTooltip from '@components/LinkWithTooltip'


export default function SidebarLinks() {
    return (
        <>
            <Accordion title="Big O">
                <LinkWithTooltip href="#bigo-chart" description="Time/Space Complexities" />
                <LinkWithTooltip href="#bigo-data-structure-operations-table" description="Data Structure Operations" />
                <LinkWithTooltip href="#bigo-sorting-algorithms-table" description="Sorting Algorithms" />
            </Accordion>
            <Accordion title="Array">
                <LinkWithTooltip href="#array-two-pointers-one-input" description="two pointers: one input, opposite ends" />
                <LinkWithTooltip href="#array-two-pointers-two-inputs" description="two pointers: two inputs, exhaust both" />
                <LinkWithTooltip href="#array-sliding-window" description="sliding window" />
                <LinkWithTooltip href="#array-prefix-sum" description="prefix sum" />
                <LinkWithTooltip href="#array-string-building" description="efficient string building" />
            </Accordion>
            <Accordion title="Hash Map">
                <LinkWithTooltip href="#hashmap-find-number-of-subarrays" description="find number of subarrays that fit an exact criteria" />
                <LinkWithTooltip href="#hashmap-sliding-window" description="sliding window" />
            </Accordion>
            <Accordion title="Linked List">
                <LinkWithTooltip href="#linkedlist-fast-and-slow-pointer" description="fast and slow pointer" />
                <LinkWithTooltip href="#linkedlist-reverse" description="reverse linked list" />
            </Accordion>
            <Accordion title="Stack">
                <LinkWithTooltip href="#stack-monotonic-increasing" description="monotonic increasing stack" />
                <LinkWithTooltip href="#stack-monotonic-decreasing" description="monotonic decreasing stack" />
            </Accordion>
            <Accordion title="Binary Tree">
                <LinkWithTooltip href="#tree-dfs-recursive" description="DFS (recursive)" />
                <LinkWithTooltip href="#tree-dfs-iterative" description="DFS (iterative)" />
                <LinkWithTooltip href="#tree-bfs" description="BFS" />
            </Accordion>
            <Accordion title="Graph">
                <LinkWithTooltip href="#graph-dfs-recursive" description="DFS (recursive)" />
                <LinkWithTooltip href="#graph-dfs-iterative" description="DFS (iterative)" />
                <LinkWithTooltip href="#graph-bfs" description="BFS" />
                <LinkWithTooltip href="#graph-dijkstra" description="Dijkstra (shortest path)" />
                <LinkWithTooltip href="#graph-bellman-ford" description="Bellman-Ford (shortest path)" />
                <LinkWithTooltip href="#graph-kruskal" description="Kruskal (mst)" />
                <LinkWithTooltip href="#graph-prim" description="Prim (mst)" />
                <LinkWithTooltip href="#graph-kahn" description="Kahn (topological sort)" />
            </Accordion>
            <Accordion title="Heap">
                <LinkWithTooltip href="#heap-find-top-k-elements" description="find top k elements with heap" />
            </Accordion>
            <Accordion title="Binary Search">
            <LinkWithTooltip href="#binarysearch-binary-search" description="binary search" />
                <LinkWithTooltip href="#binarysearch-duplicate-elements-left-insertion" description="duplicate elements, left-most insertion point" />
                <LinkWithTooltip href="#binarysearch-duplicate-elements-right-insertion" description="duplicate elements, right-most insertion point" />
                <LinkWithTooltip href="#binarysearch-greedy-minimum" description="greedy (minimum)" />
                <LinkWithTooltip href="#binarysearch-greedy-maximum" description="greedy (maximum)" />
            </Accordion>
            <Accordion title="Backtracking">
                <LinkWithTooltip href="#backtracking-backtracking" description="backtracking" />
            </Accordion>
            <Accordion title="Dynamic Programming">
                <LinkWithTooltip href="#dp-top-down" description="top-down DP" />
                <LinkWithTooltip href="#dp-bottom-up" description="bottom-up DP" />
                <LinkWithTooltip href="#dp-kadane" description="Kadane (max-sum subarray)" />
            </Accordion>
            <Accordion title="Bit Manipulation">
                <LinkWithTooltip href="#bitmanipulation-test-kth-bit" description="test kth bit" />
                <LinkWithTooltip href="#bitmanipulation-set-kth-bit" description="set kth bit" />
                <LinkWithTooltip href="#bitmanipulation-clear-kth-bit" description="clear kth bit" />
                <LinkWithTooltip href="#bitmanipulation-get-rightmost-bit" description="get rightmost bit" />
                <LinkWithTooltip href="#bitmanipulation-count-set-bits" description="count set bits" />
                <LinkWithTooltip href="#bitmanipulation-multiply-power-of-two" description="multiply by 2^k" />
                <LinkWithTooltip href="#bitmanipulation-divide-power-of-two" description="divide by 2^k" />
                <LinkWithTooltip href="#bitmanipulation-check-power-of-two" description="check if number is power of 2" />
                <LinkWithTooltip href="#bitmanipulation-swap-variables" description="swap two variables" />
            </Accordion>
            <Accordion title="Matrix">
                <LinkWithTooltip href="#matrix-create-copy" description="create / copy" />
                <LinkWithTooltip href="#matrix-diagonals" description="main / anti diagonals" />
                <LinkWithTooltip href="#matrix-rotate-transpose" description="rotate / transpose" />
            </Accordion>
            <Accordion title="Data Structures">
                <LinkWithTooltip href="#ds-array" description="array" />
                <LinkWithTooltip href="#ds-hash-map" description="hashmap" />
                <LinkWithTooltip href="#ds-linked-list" description="linked list" />
                <LinkWithTooltip href="#ds-doubly-linked-list" description="doubly linked list" />
                <LinkWithTooltip href="#ds-binary-tree" description="binary tree" />
                <LinkWithTooltip href="#ds-binary-search-tree" description="binary search tree" />
                <LinkWithTooltip href="#ds-graph" description="graph" />
                <LinkWithTooltip href="#ds-union-find" description="union find" />
                <LinkWithTooltip href="#ds-union-find-optimized" description="union find optimized" />
                <LinkWithTooltip href="#ds-trie" description="trie" />
            </Accordion>
            <Accordion title="Sorting Algorithms">
                <LinkWithTooltip href="#sort-bubble" description="bubble sort" />
                <LinkWithTooltip href="#sort-selection" description="selection sort" />
                <LinkWithTooltip href="#sort-insertion" description="insertion sort" />
                <LinkWithTooltip href="#sort-shell" description="shell sort" />
                <LinkWithTooltip href="#sort-merge" description="mergesort" />
                <LinkWithTooltip href="#sort-quick" description="quicksort" />
                <LinkWithTooltip href="#sort-tim" description="timsort" />
                <LinkWithTooltip href="#sort-heap" description="heapsort" />
                <LinkWithTooltip href="#sort-counting" description="counting sort" />
                <LinkWithTooltip href="#sort-bucket" description="bucket sort" />
                <LinkWithTooltip href="#sort-radix" description="radix sort" />
                <LinkWithTooltip href="#sort-cube" description="cubesort" />
                <LinkWithTooltip href="#sort-bogo" description="bogo sort" />
                <LinkWithTooltip href="#sort-pancake" description="pancake sort" />
                <LinkWithTooltip href="#sort-sleep" description="sleep sort" />
            </Accordion>
        </>
    )
}
