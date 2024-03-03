import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import FastAndSlowPointerPY from '@code/python/linked_list/fast_and_slow_pointer.py?raw'
import ReverseLinkedListPY from '@code/python/linked_list/reverse_linked_list.py?raw'

import FastAndSlowPointerJS from '@code/javascript/linked_list/fast_and_slow_pointer.js?raw'
import ReverseLinkedListJS from '@code/javascript/linked_list/reverse_linked_list.js?raw'


export default function LinkedList() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Linked List</h2>
            <section id="linkedlist-fast-and-slow-pointer">
                <Tabs title="fast and slow pointer">
                    <Tabs.Tab code={FastAndSlowPointerPY} language="python" />
                    <Tabs.Tab code={FastAndSlowPointerJS} language="javascript" />
                </Tabs>
            </section>
            <section id="linkedlist-reverse">
                <Tabs title="reverse linked list">
                    <Tabs.Tab code={ReverseLinkedListPY} language="python" />
                    <Tabs.Tab code={ReverseLinkedListJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
