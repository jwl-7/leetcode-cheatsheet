class ListNode:
    def __init__(self, data=None, next=None) -> None:
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def __repr__(self) -> str:
        elements = []
        current_node = self.head

        while current_node:
            elements.append(str(current_node.data))
            current_node = current_node.next

        return ' -> '.join(elements) + ' -> None'

    def append(self, data) -> None:
        new_node = ListNode(data)

        if not self.head:
            self.head = new_node
            return

        last_node = self.head

        while last_node and last_node.next:
            last_node = last_node.next

        last_node.next = new_node

    def insert(self, data, index: int) -> None:
        new_node = ListNode(data)

        if index == 0:
            new_node.next = self.head
            self.head = new_node
            return

        current_node = self.head
        prev_node = None

        for _ in range(index):
            if not current_node:
                raise IndexError('Index out of range')

            prev_node = current_node
            current_node = current_node.next

        if prev_node:
            prev_node.next = new_node
        else:
            raise IndexError('Index out of range')

        new_node.next = current_node

    def delete(self, index: int) -> None:
        if index == 0:
            if self.head:
                self.head = self.head.next
            else:
                raise IndexError('List is empty')
            return

        current_node = self.head

        for _ in range(index - 1):
            if not current_node:
                raise IndexError('Index out of range')
            current_node = current_node.next

        if not current_node or not current_node.next:
            raise IndexError('Index out of range')

        current_node.next = current_node.next.next
