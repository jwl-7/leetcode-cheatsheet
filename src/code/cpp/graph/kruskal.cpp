#include <vector>
#include <algorithm>

using namespace std;


vector<tuple<int, int, int>> kruskal_mst(int n, vector<tuple<int, int, int>>& edges) {
    vector<tuple<int, int, int>> mst;
    UnionFind uf(n);
    sort(edges.begin(), edges.end());

    for (auto& [w, u, v] : edges) {
        if (!uf.connected(u, v)) {
            uf.unionNodes(u, v);
            mst.emplace_back(w, u, v);
        }
    }

    return mst;
}
