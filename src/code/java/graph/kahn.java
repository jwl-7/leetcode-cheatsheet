import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;


public List<Integer> kahnTopologicalSort(Map<Integer, List<Integer>> graph) {
    List<Integer> result = new ArrayList<>();
    Map<Integer, Integer> indegree = new HashMap<>();

    for (List<Integer> vertices : graph.values()) {
        for (int v : vertices) {
            indegree.put(v, indegree.getOrDefault(v, 0) + 1);
        }
    }

    Queue<Integer> queue = new LinkedList<>();
    for (Integer node : graph.keySet()) {
        if (!indegree.containsKey(node)) {
            queue.offer(node);
        }
    }

    while (!queue.isEmpty()) {
        int node = queue.poll();
        result.add(node);

        if (graph.containsKey(node)) {
            for (int neighbor : graph.get(node)) {
                indegree.put(neighbor, indegree.get(neighbor) - 1);

                if (indegree.get(neighbor) == 0) {
                    queue.offer(neighbor);
                }
            }
        }
    }

    if (result.size() != graph.size()) {
        return new ArrayList<>();
    }

    return result;
}
