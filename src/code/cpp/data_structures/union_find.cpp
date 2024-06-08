#include <iostream>
#include <vector>

using namespace std;


class UnionFind {
private:
    vector<int> root;

public:
    UnionFind(int n) : root(n) {
        for (int i = 0; i < n; ++i) {
            root[i] = i;
        }
    }

    int find(int a) {
        return a == root[a] ? a : root[a] = find(root[a]);
    }

    void unionSets(int a, int b) {
        root[find(a)] = find(b);
    }

    bool connected(int a, int b) {
        return find(a) == find(b);
    }

    string toString() {
        int n = root.size();
        vector<vector<int>> components(n);

        for (int i = 0; i < n; ++i) {
            components[find(i)].push_back(i);
        }

        string result;

        for (const auto& component : components) {
            if (!component.empty()) {
                for (int node : component) {
                    result += "(" + to_string(node) + ") - ";
                }
                result.pop_back();
                result.pop_back();
                result += "\n";
            }
        }

        return result;
    }
};
