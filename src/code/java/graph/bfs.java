import java.util.LinkedList;
import java.util.HashSet;
import java.util.Queue;
import java.util.Set;
import java.util.Map;


public static int fn(Map<Integer, List<Integer>> graph) {
    Queue<Integer> que = new LinkedList<>();
    Set<Integer> seen = new HashSet<>();
    que.offer(START_NODE);
    seen.add(START_NODE);
    int ans = 0;

    while (!que.isEmpty()) {
        int node = que.poll();
        // TODO: Logic
        List<Integer> neighbors = graph.getOrDefault(node, new ArrayList<>());
        for (int neighbor : neighbors) {
            if (!seen.contains(neighbor)) {
                seen.add(neighbor);
                que.offer(neighbor);
            }
        }
    }

    return ans;
}
