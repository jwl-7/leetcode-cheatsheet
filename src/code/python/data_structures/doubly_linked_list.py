from typing import Any


class ListNode:
    def __init__(self, data: Any) -> None:
        self.data = data
        self.prev = None
        self.next = None

    def __repr__(self) -> str:
        return f'[{self.data}]'


class DoublyLinkedList:
    def __init__(self) -> None:
        self.head = None

    def append(self, data: Any) -> None:
        if not self.head:
            self.head = ListNode(data)
            return

        curr = self.head

        while curr.next:
            curr = curr.next

        new_node = ListNode(data)
        curr.next = new_node
        new_node.prev = curr

    def delete(self, data: Any) -> None:
        if not self.head:
            return

        if self.head.data == data:
            self.head = self.head.next
            if self.head:
                self.head.prev = None
            return

        curr = self.head
        while curr:
            if curr.data == data:
                prev_node = curr.prev
                prev_node.next = curr.next
                if curr.next:
                    curr.next.prev = prev_node
                return
            curr = curr.next

    def reverse(self) -> None:
        curr = self.head
        prev = None

        while curr:
            nxt = curr.next
            curr.next = prev
            curr.prev = nxt
            prev = curr
            curr = nxt

        self.head = prev

    def __repr__(self) -> str:
        if not self.head:
            return 'None'

        nodes = []
        curr = self.head

        while curr:
            nodes.append(repr(curr))
            curr = curr.next

        return ' <-> '.join(nodes) + ' <-> None'
