class ListNode:
    def __init__(self, data=None, prev=None, next=None) -> None:
        self.data = data
        self.prev = prev
        self.next = next

class DoublyLinkedList:
    def __init__(self) -> None:
        self.head = None

    def __repr__(self) -> str:
        elements = []
        current_node = self.head

        while current_node:
            elements.append(str(current_node.data))
            current_node = current_node.next

        return ' <-> '.join(elements) + ' <-> None'

    def append(self, data) -> None:
        new_node = ListNode(data)

        if not self.head:
            self.head = new_node
            return

        last_node = self.head

        while last_node.next:
            last_node = last_node.next

        last_node.next = new_node
        new_node.prev = last_node

    def insert(self, data, index: int) -> None:
        new_node = ListNode(data)

        if index == 0:
            new_node.next = self.head
            new_node.prev = None

            if self.head:
                self.head.prev = new_node
            self.head = new_node

            return

        current_node = self.head
        prev_node = None

        for _ in range(index):
            if not current_node:
                break
            prev_node = current_node
            current_node = current_node.next

        new_node.next = current_node
        new_node.prev = prev_node

        if prev_node:
            prev_node.next = new_node
        else:
            self.head = new_node

        if current_node:
            current_node.prev = new_node

    def delete(self, index: int) -> None:
        if index == 0:
            if self.head:
                self.head = self.head.next
                if self.head:
                    self.head.prev = None
            else:
                raise IndexError('List is empty')
            return

        current_node = self.head

        for _ in range(index):
            if not current_node:
                break
            current_node = current_node.next

        if not current_node:
            raise IndexError('Index out of range')

        if current_node.prev:
            current_node.prev.next = current_node.next
        if current_node.next:
            current_node.next.prev = current_node.prev
