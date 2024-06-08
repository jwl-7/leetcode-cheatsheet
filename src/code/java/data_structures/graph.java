import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class Graph {
    Map<String, List<String>> graph;

    public Graph() {
        graph = new HashMap<>();
    }

    public void addVertex(String vertex) {
        if (!graph.containsKey(vertex)) {
            graph.put(vertex, new ArrayList<>());
        }
    }

    public void addEdge(String a, String b) {
        addVertex(a);
        addVertex(b);
        graph.get(a).add(b);
        graph.get(b).add(a);
    }

    public List<String> getNeighbors(String vertex) {
        return graph.getOrDefault(vertex, new ArrayList<>());
    }

    @Override
    public String toString() {
        StringBuilder output = new StringBuilder();

        for (Map.Entry<String, List<String>> entry : graph.entrySet()) {
            output.append(entry.getKey()).append(" - ").append(String.join(" - ", entry.getValue())).append("\n");
        }

        return output.toString();
    }
}
