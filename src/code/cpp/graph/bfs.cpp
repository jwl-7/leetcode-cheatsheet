#include <queue>
#include <unordered_set>
#include <vector>

using namespace std;


int fn(vector<vector<int>>& graph) {
    queue<int> que;
    unordered_set<int> seen;
    que.push(START_NODE);
    seen.insert(START_NODE);
    int ans = 0;

    while (!que.empty()) {
        int node = que.front();
        que.pop();
        // TODO: logic
        for (int neighbor: graph[node]) {
            if (seen.find(neighbor) == seen.end()) {
                seen.insert(neighbor);
                que.push(neighbor);
            }
        }
    }
}
