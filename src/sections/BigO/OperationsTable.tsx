import styles from './bigo.module.sass'


export default function OperationsTable() {
    return (
        <section id="bigo-operations-table">
            <div className={styles.container}>
                <table>
                    <tbody>
                        <tr>
                            <th>Data Structure</th>
                            <th colSpan={8}>Time Complexity</th>
                            <th>Space Complexity</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th colSpan={4}>Average</th>
                            <th colSpan={4}>Worst</th>
                            <th>Worst</th>
                        </tr>
                        <tr>
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
                        <tr>
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
                        <tr>
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
                        <tr>
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
                        <tr>
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
                        <tr>
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
                        <tr>
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
                        <tr>
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
                        <tr>
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
                        <tr>
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
                        <tr>
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
                        <tr>
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
                        <tr>
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
                        <tr>
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
                        <tr>
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
        </section>
    )
}
