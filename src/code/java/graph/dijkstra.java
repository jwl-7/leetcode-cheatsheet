import java.util.Pair;
import java.util.PriorityQueue;
import java.util.Queue;



int[] distances = new int[n];
Arrays.fill(distances, Integer.MAX_VALUE);
distances[source] = 0;

Queue<Pair<Integer, Integer>> heap = new PriorityQueue<Pair<Integer,Integer>>(Comparator.comparing(Pair::getKey));
heap.add(new Pair(0, source));

while (!heap.isEmpty()) {
    Pair<Integer, Integer> curr = heap.remove();
    int currDist = curr.getKey();
    int node = curr.getValue();

    if (currDist > distances[node]) {
        continue;
    }

    for (Pair<Integer, Integer> edge: graph.get(node)) {
        int neighbor = edge.getKey();
        int weight = edge.getValue();
        int dist = currDist + weight;

        if (dist < distances[neighbor]) {
            distances[neighbor] = dist;
            heap.add(new Pair(dist, neighbor));
        }
    }
}
