import styles from './Content.module.sass'

import { useSidebar } from '@components/Sidebar/SidebarProvider'

import BigO from '@sections/BigO/BigO'
import Array from '@sections/Array/Array'
import HashMap from '@sections/HashMap/HashMap'
import LinkedList from '@sections/LinkedList/LinkedList'
import Stack from '@sections/Stack/Stack'
import BinaryTree from '@sections/BinaryTree/BinaryTree'
import Graph from '@sections/Graph/Graph'
import Heap from '@sections/Heap/Heap'
import BinarySearch from '@sections/BinarySearch/BinarySearch'
import Backtracking from '@sections/Backtracking/Backtracking'
import DynamicProgramming from '@sections/DynamicProgramming/DynamicProgramming'
import BitManipulation from '@/sections/BitManipulation/BitManipulation'
import Matrix from '@/sections/Matrix/Matrix'
import DataStructures from '@sections/DataStructures/DataStructures'
import SortingAlgorithms from '@/sections/SortingAlgorithms/SortingAlgorithms'

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
            <BitManipulation />
            <Matrix />
            <DataStructures />
            <SortingAlgorithms />
        </main>
    )
}
