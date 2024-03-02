import styles from './sidebar.module.sass'

import { RefObject, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useSidebar } from '@components/Sidebar/context'

import Accordion from '@components/Accordion'
import clsx from '@utils/clsx'
import LinkWithTooltip from '@components/LinkWithTooltip'


interface SidebarProps {
    hamburgerButtonRef: RefObject<HTMLDivElement>
}


export default function Sidebar({ hamburgerButtonRef }: SidebarProps) {
    const ref = useRef<HTMLElement>(null)
    const { isSidebarOpen, showSidebar, hideSidebar } = useSidebar()
    const [shouldHide, setShouldHide] = useState<boolean>(false)

    const classes = clsx(
        styles.sidebar,
        !isSidebarOpen && styles.exit,
        !isSidebarOpen && shouldHide && styles.hide
    )

    const handleMediaQueryChange = (matches: boolean) => {
        if (matches && isSidebarOpen) hideSidebar()
        else if (!matches && !isSidebarOpen) showSidebar()
    }

    const isScreenMd = useMediaQuery({ maxWidth: 768 }, undefined, handleMediaQueryChange)

    const hideSidebarMd = () => {
        if (isScreenMd && isSidebarOpen) hideSidebar()
    }
    const handleAnimationStart = () => setShouldHide(false)
    const handleAnimationEnd = () => {
        if (!isSidebarOpen) setShouldHide(true)
    }

    useClickOutside([ref, hamburgerButtonRef], hideSidebarMd)

    return (
        <nav ref={ref} className={classes} onAnimationStart={handleAnimationStart} onAnimationEndCapture={handleAnimationEnd}>
            <div className={styles.scrollContainer}>
                <Accordion title="Big O">
                    <LinkWithTooltip href="#bigo-chart" description="Time/Space Complexities" />
                </Accordion>
                <Accordion title="Data Structures">
                    <LinkWithTooltip href="#ds-array" description="Array" />
                    <LinkWithTooltip href="#ds-hashmap" description="Hashmap" />
                    <LinkWithTooltip href="#ds-linkedlist" description="Linked List" />
                    <LinkWithTooltip href="#ds-doubly-linkedlist" description="Doubly Linked List" />
                    <LinkWithTooltip href="#ds-binarytree" description="Binary Tree" />
                    <LinkWithTooltip href="#ds-graph" description="Graph" />
                    <LinkWithTooltip href="#ds-union-find" description="Union Find" />
                    <LinkWithTooltip href="#ds-union-find-optimized" description="Union Find Optimized" />
                    <LinkWithTooltip href="#ds-trie" description="Trie" />
                </Accordion>
                <Accordion title="Array">
                    <LinkWithTooltip href="#array-two-pointers-one-input" description="two pointers: one input, opposite ends" />
                    <LinkWithTooltip href="#array-two-pointers-two-inputs" description="two pointers: two inputs, exhaust both" />
                    <LinkWithTooltip href="#array-sliding-window" description="sliding window" />
                    <LinkWithTooltip href="#array-prefix-sum" description="prefix sum" />
                    <LinkWithTooltip href="#array-string-building" description="efficient string building" />
                </Accordion>
                <Accordion title="Hash Map">
                    <LinkWithTooltip href="#hashmap-number-of-subarrays" description="number of subarrays that fit an exact criteria" />
                </Accordion>
                <Accordion title="Linked List">
                    <LinkWithTooltip href="#linkedlist-fast-and-slow-pointer" description="fast and slow pointer" />
                    <LinkWithTooltip href="#linkedlist-reverse" description="reverse linked list" />
                </Accordion>
                <Accordion title="Stack">
                    <LinkWithTooltip href="#stack-monotonic-increasing" description="monotonic increasing stack" />
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
                    <LinkWithTooltip href="#graph-dijkstra" description="Dijkstra" />
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
                    <LinkWithTooltip href="#dp-top-down" description="top-down" />
                    <LinkWithTooltip href="#dp-bottom-up" description="bottom-up" />
                </Accordion>
            </div>
        </nav>
    )
}
