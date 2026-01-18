import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs/Tabs'

import FastAndSlowPointerPY from '@code/python/linked_list/fast_and_slow_pointer.py?raw'
import ReverseLinkedListPY from '@code/python/linked_list/reverse_linked_list.py?raw'

import FastAndSlowPointerJS from '@code/javascript/linked_list/fast_and_slow_pointer.js?raw'
import ReverseLinkedListJS from '@code/javascript/linked_list/reverse_linked_list.js?raw'

import FastAndSlowPointerJAVA from '@code/java/linked_list/fast_and_slow_pointer.java?raw'
import ReverseLinkedListJAVA from '@code/java/linked_list/reverse_linked_list.java?raw'

import FastAndSlowPointerCPP from '@code/cpp/linked_list/fast_and_slow_pointer.cpp?raw'
import ReverseLinkedListCPP from '@code/cpp/linked_list/reverse_linked_list.cpp?raw'

import FastAndSlowPointerRuby from '@code/ruby/linked_list/fast_and_slow_pointer.rb?raw'
import ReverseLinkedListRuby from '@code/ruby/linked_list/reverse_linked_list.rb?raw'

export default function LinkedList() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Linked List</h2>
            <section id="linkedlist-fast-and-slow-pointer">
                <Tabs title="fast and slow pointer">
                    <Tabs.Tab code={FastAndSlowPointerPY} language="python" />
                    <Tabs.Tab code={FastAndSlowPointerJS} language="javascript" />
                    <Tabs.Tab code={FastAndSlowPointerJAVA} language="java" />
                    <Tabs.Tab code={FastAndSlowPointerCPP} language="cpp" />
                    <Tabs.Tab code={FastAndSlowPointerRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="linkedlist-reverse">
                <Tabs title="reverse linked list">
                    <Tabs.Tab code={ReverseLinkedListPY} language="python" />
                    <Tabs.Tab code={ReverseLinkedListJS} language="javascript" />
                    <Tabs.Tab code={ReverseLinkedListJAVA} language="java" />
                    <Tabs.Tab code={ReverseLinkedListCPP} language="cpp" />
                    <Tabs.Tab code={ReverseLinkedListRuby} language="ruby" />
                </Tabs>
            </section>
        </div>
    )
}
