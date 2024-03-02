import styles from './content.module.sass'

import { useSidebar } from '@components/Sidebar/context'

import BigO from './BigO'
import DataStructures from './DataStructures'
import Array from './Array'
import HashMap from './HashMap'
import LinkedList from './LinkedList'
import Stack from './Stack'
import BinaryTree from './BinaryTree'
import Graph from './Graph'
import Heap from './Heap'
import BinarySearch from './BinarySearch'
import Backtracking from './Backtracking'
import DynamicProgramming from './DynamicProgramming'

import clsx from '@utils/clsx'


export default function Content() {
    const { isSidebarOpen } = useSidebar()
    const classes = clsx(
        styles.main,
        !isSidebarOpen && styles.sidebarHidden
    )

    return (
        <main className={classes}>
            <BigO />
            <DataStructures />
            <Array />
            <HashMap />
            <LinkedList />
            <Stack />
            <BinaryTree />
            <Graph />
            <Heap />
            <BinarySearch />
            <Backtracking />
            <DynamicProgramming />
        </main>
    )
}
