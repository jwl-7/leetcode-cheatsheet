import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class UnionFind {
    private int[] root;

    public UnionFind(int n) {
        this.root = new int[n];
        for (int i = 0; i < n; i++) {
            this.root[i] = i;
        }
    }

    public int find(int a) {
        if (a == root[a]) {
            return a;
        }
        return root[a] = find(root[a]);
    }

    public void union(int a, int b) {
        root[find(a)] = find(b);
    }

    public boolean connected(int a, int b) {
        return find(a) == find(b);
    }

    @Override
    public String toString() {
        int n = root.length;
        List<List<Integer>> components = new ArrayList<>();
        Map<Integer, List<Integer>> componentMap = new HashMap<>();

        for (int i = 0; i < n; i++) {
            int root = find(i);

            if (!componentMap.containsKey(root)) {
                componentMap.put(root, new ArrayList<>());
            }

            componentMap.get(root).add(i);
        }

        StringBuilder sb = new StringBuilder();

        for (List<Integer> component : componentMap.values()) {
            sb.append(" - ").append(component);
        }

        return sb.toString();
    }
}
