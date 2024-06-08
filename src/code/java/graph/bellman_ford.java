public static int[] bellmanFord(int n, List<int[]> edges, int source) {
    int[] distances = new int[n];
    Arrays.fill(distances, Integer.MAX_VALUE);
    distances[source] = 0;

    for (int i = 0; i < n - 1; i++) {
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];
            if (distances[u] != Integer.MAX_VALUE && distances[u] + w < distances[v]) {
                distances[v] = distances[u] + w;
            }
        }
    }

    for (int[] edge : edges) {
        int u = edge[0];
        int v = edge[1];
        int w = edge[2];
        if (distances[u] != Integer.MAX_VALUE && distances[u] + w < distances[v]) {
            return new int[]{};
        }
    }

    return distances;
}
