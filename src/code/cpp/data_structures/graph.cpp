#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>

using namespace std;


class Graph {
private:
    unordered_map<string, vector<string>> graph;

public:
    Graph() {}

    void addVertex(const string& vertex) {
        if (graph.find(vertex) == graph.end()) {
            graph[vertex] = {};
        }
    }

    void addEdge(const string& a, const string& b) {
        addVertex(a);
        addVertex(b);
        graph[a].push_back(b);
        graph[b].push_back(a);
    }

    vector<string> getNeighbors(const string& vertex) {
        return graph[vertex];
    }

    string toString() {
        string output;
        for (const auto& [vertex, neighbors] : graph) {
            output += vertex + " - ";
            for (const auto& neighbor : neighbors) {
                output += neighbor + " - ";
            }
            output.pop_back();
            output.pop_back();
            output += "\n";
        }
        return output;
    }
};
