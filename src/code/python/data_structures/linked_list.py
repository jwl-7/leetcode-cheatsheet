from typing import Any


class ListNode:
    def __init__(self, data: Any) -> None:
        self.data = data
        self.next = None

    def __repr__(self) -> str:
        node = self
        nodes = []

        while node is not None:
            nodes.append(f'[{node.data}]')
            node = node.next

        nodes.append('None')

        return ' -> '.join(nodes)


class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def append(self, data: Any) -> None:
        if not self.head:
            self.head = ListNode(data)
            return

        curr = self.head

        while curr.next:
            curr = curr.next

        curr.next = ListNode(data)

    def delete(self, data: Any) -> None:
        if not self.head:
            return

        if self.head.data == data:
            self.head = self.head.next
            return

        prev = None
        curr = self.head

        while curr:
            if curr.data == data:
                prev.next = curr.next
                return

            prev = curr
            curr = curr.next

    def reverse(self) -> None:
        prev = None
        curr = self.head

        while curr:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node

        self.head = prev

    def __repr__(self) -> str:
        return repr(self.head)
