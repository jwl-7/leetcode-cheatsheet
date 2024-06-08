import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;


public List<int[]> primMST(int n, List<int[]> edges) {
    List<int[]> mst = new ArrayList<>();
    UnionFind uf = new UnionFind(n);
    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(edge -> edge[0]));

    for (int[] edge : edges) {
        pq.offer(edge);
    }

    while (!pq.isEmpty()) {
        int[] edge = pq.poll();
        int w = edge[0];
        int u = edge[1];
        int v = edge[2];

        if (!uf.connected(u, v)) {
            uf.union(u, v);
            mst.add(edge);
        }
    }

    return mst;
}
