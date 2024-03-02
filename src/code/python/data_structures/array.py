class Array:
    def __init__(self, capacity: int) -> None:
        self.capacity = capacity
        self.size = 0
        self.data = [None] * capacity

    def __repr__(self) -> str:
        return '[' + ', '.join(str(self.data[i]) for i in range(self.size)) + ']'

    def __getitem__(self, index: int):
        if 0 <= index < self.size:
            return self.data[index]
        else:
            raise IndexError('Index out of range')

    def __setitem__(self, index: int, value) -> None:
        if 0 <= index < self.size:
            self.data[index] = value
        else:
            raise IndexError('Index out of range')

    def __len__(self) -> int:
        return self.size

    def insert(self, index: int, value) -> None:
        if self.size == self.capacity:
            raise Exception('Array is full')

        if 0 <= index <= self.size:
            for i in range(self.size - 1, index - 1, -1):
                self.data[i+1] = self.data[i]
            self.data[index] = value
            self.size += 1
        else:
            raise IndexError('Index out of range')

    def append(self, value) -> None:
        if self.size == self.capacity:
            raise Exception('Array is full')

        self.data[self.size] = value
        self.size += 1

    def delete(self, index: int) -> None:
        if 0 <= index < self.size:
            for i in range(index, self.size - 1):
                self.data[i] = self.data[i+1]
            self.size -= 1
        else:
            raise IndexError('Index out of range')
