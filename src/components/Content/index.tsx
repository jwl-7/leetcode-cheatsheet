import styles from './content.module.sass'

import { useSidebar } from '@components/Sidebar/context'

import BigO from '@sections/BigO'
import DataStructures from '@sections/DataStructures'
import Array from '@sections/Array'
import HashMap from '@sections/HashMap'
import LinkedList from '@sections/LinkedList'
import Stack from '@sections/Stack'
import BinaryTree from '@sections/BinaryTree'
import Graph from '@sections/Graph'
import Heap from '@sections/Heap'
import BinarySearch from '@sections/BinarySearch'
import Backtracking from '@sections/Backtracking'
import DynamicProgramming from '@sections/DynamicProgramming'

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
