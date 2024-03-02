class UnionFind:
    def __init__(self, n: int) -> None:
        self.root = list(range(n))
        self.rank = [1] * n

    def __repr__(self) -> str:
        sets = {}

        for i in range(len(self.root)):
            root = self.find(i)

            if root not in sets:
                sets[root] = []

            sets[root].append(i)

        if not sets:
            return 'No sets found'

        repr_str = ''
        for root, elements in sets.items():
            repr_str += f'Set with root {root}: {elements}\n'

        return repr_str

    def find(self, x: int) -> int:
        return x if x == self.root[x] else self.find(self.root[x])

    def union(self, x: int, y: int) -> None:
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x != root_y:
            if self.rank[root_x] < self.rank[root_y]:
                self.root[root_x] = root_y
            elif self.rank[root_x] > self.rank[root_y]:
                self.root[root_y] = root_x
            else:
                self.root[root_y] = root_x
                self.rank[root_x] += 1

    def connected(self, x: int, y: int) -> bool:
        return self.find(x) == self.find(y)
