from heapq import heappop


def prim_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    mst = []
    uf = UnionFind(n)
    edges.sort()

    pq = [(w, u, v) for w, u, v in edges]

    while pq:
        w, u, v = heappop(pq)

        if not uf.connected(u, v):
            uf.union(u, v)
            mst.append((w, u, v))

    return mst
