class Graph:
    def __init__(self) -> None:
        self.graph = {}

    def add_vertex(self, vertex: str) -> None:
        if vertex not in self.graph:
            self.graph[vertex] = []

    def add_edge(self, a: str, b: str) -> None:
        self.add_vertex(a)
        self.add_vertex(b)
        self.graph[a].append(b)
        self.graph[b].append(a)

    def get_neighbors(self, vertex: str) -> list[str]:
        return self.graph.get(vertex, [])

    def __repr__(self) -> str:
        output = ''

        for vertex, neighbors in self.graph.items():
            output += f'{vertex} - {' - '.join(neighbors)}\n'

        return output
