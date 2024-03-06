import styles from './bigo.module.sass'

import { MouseEvent, useRef, useState } from 'react'
import { useClickOutside } from '@/hooks/useClickOutside'


export default function DataStructureOperationsTable() {
    const ref = useRef<HTMLTableElement>(null)
    const [selectedRow, setSelectedRow] = useState<string>('')

    const removeFocused = () => {
        if (selectedRow) {
            const tableElement = ref.current
            const focusedRow = tableElement?.querySelector(`tr[data-row-number="${selectedRow}"]`)
            focusedRow?.removeAttribute('focused')
        }
    }

    const handleClick = (event: MouseEvent) => {
        const row = event.currentTarget as HTMLTableRowElement
        const rowNumber = row.getAttribute('data-row-number') ?? ''

        removeFocused()

        if (rowNumber === selectedRow) {
            setSelectedRow('')
        } else {
            row.setAttribute('focused', '')
            setSelectedRow(rowNumber)
        }
    }

    useClickOutside(ref, removeFocused)

    return (
        <section id="bigo-data-structure-operations-table">
            <div className={styles.container}>
                <h3>Data Structure Operations</h3>
                <div className={styles.tableWrapper}>
                    <table ref={ref}>
                        <tbody>
                            <tr onClick={handleClick} data-row-number="1">
                                <th>Data Structure</th>
                                <th colSpan={8}>Time Complexity</th>
                                <th>Space Complexity</th>
                            </tr>
                            <tr onClick={handleClick} data-row-number="2">
                                <th></th>
                                <th colSpan={4}>Average</th>
                                <th colSpan={4}>Worst</th>
                                <th>Worst</th>
                            </tr>
                            <tr onClick={handleClick} data-row-number="3">
                                <th></th>
                                <th>Access</th>
                                <th>Search</th>
                                <th>Insertion</th>
                                <th>Deletion</th>
                                <th>Access</th>
                                <th>Search</th>
                                <th>Insertion</th>
                                <th>Deletion</th>
                                <th></th>
                            </tr>
                            <tr onClick={handleClick} data-row-number="4">
                                <td><a href="http://en.wikipedia.org/wiki/Array_data_structure" target="_blank">Array</a></td>
                                <td className={styles.green}>Θ(1)</td>
                                <td className={styles.yellow}>Θ(n)</td>
                                <td className={styles.yellow}>Θ(n)</td>
                                <td className={styles.yellow}>Θ(n)</td>
                                <td className={styles.green}>O(1)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr onClick={handleClick} data-row-number="5">
                                <td><a href="http://en.wikipedia.org/wiki/Stack_(abstract_data_type)" target="_blank">Stack</a></td>
                                <td className={styles.yellow}>Θ(n)</td>
                                <td className={styles.yellow}>Θ(n)</td>
                                <td className={styles.green}>Θ(1)</td>
                                <td className={styles.green}>Θ(1)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.green}>O(1)</td>
                                <td className={styles.green}>O(1)</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr onClick={handleClick} data-row-number="6">
                                <td><a href="http://en.wikipedia.org/wiki/Queue_(abstract_data_type)" target="_blank">Queue</a></td>
                                <td className={styles.yellow}>Θ(n)</td>
                                <td className={styles.yellow}>Θ(n)</td>
                                <td className={styles.green}>Θ(1)</td>
                                <td className={styles.green}>Θ(1)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.green}>O(1)</td>
                                <td className={styles.green}>O(1)</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr onClick={handleClick} data-row-number="7">
                                <td><a href="http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists" target="_blank">Singly-Linked List</a></td>
                                <td className={styles.yellow}>Θ(n)</td>
                                <td className={styles.yellow}>Θ(n)</td>
                                <td className={styles.green}>Θ(1)</td>
                                <td className={styles.green}>Θ(1)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.green}>O(1)</td>
                                <td className={styles.green}>O(1)</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr onClick={handleClick} data-row-number="8">
                                <td><a href="http://en.wikipedia.org/wiki/Doubly_linked_list" target="_blank">Doubly-Linked List</a></td>
                                <td className={styles.yellow}>Θ(n)</td>
                                <td className={styles.yellow}>Θ(n)</td>
                                <td className={styles.green}>Θ(1)</td>
                                <td className={styles.green}>Θ(1)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.green}>O(1)</td>
                                <td className={styles.green}>O(1)</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr onClick={handleClick} data-row-number="9">
                                <td><a href="http://en.wikipedia.org/wiki/Skip_list" target="_blank">Skip List</a></td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.orange}>O(n log(n))</td>
                            </tr>
                            <tr onClick={handleClick} data-row-number="10">
                                <td><a href="http://en.wikipedia.org/wiki/Hash_table" target="_blank">Hash Table</a></td>
                                <td className={styles.gray}>N/A</td>
                                <td className={styles.green}>Θ(1)</td>
                                <td className={styles.green}>Θ(1)</td>
                                <td className={styles.green}>Θ(1)</td>
                                <td className={styles.gray}>N/A</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr onClick={handleClick} data-row-number="11">
                                <td><a href="http://en.wikipedia.org/wiki/Binary_search_tree" target="_blank">Binary Search Tree</a></td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr onClick={handleClick} data-row-number="12">
                                <td><a href="https://en.wikipedia.org/wiki/Cartesian_tree" target="_blank">Cartesian Tree</a></td>
                                <td className={styles.gray}>N/A</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.gray}>N/A</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr onClick={handleClick} data-row-number="13">
                                <td><a href="http://en.wikipedia.org/wiki/B_tree" target="_blank">B-Tree</a></td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr onClick={handleClick} data-row-number="14">
                                <td><a href="http://en.wikipedia.org/wiki/Red-black_tree" target="_blank">Red-Black Tree</a></td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr onClick={handleClick} data-row-number="15">
                                <td><a href="https://en.wikipedia.org/wiki/Splay_tree" target="_blank">Splay Tree</a></td>
                                <td className={styles.gray}>N/A</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.gray}>N/A</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr onClick={handleClick} data-row-number="16">
                                <td><a href="http://en.wikipedia.org/wiki/AVL_tree" target="_blank">AVL Tree</a></td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr onClick={handleClick} data-row-number="17">
                                <td><a href="http://en.wikipedia.org/wiki/K-d_tree" target="_blank">KD Tree</a></td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.oliveGreen}>Θ(log(n))</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
