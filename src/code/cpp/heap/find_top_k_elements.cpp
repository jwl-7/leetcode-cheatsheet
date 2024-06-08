#include <vector>
#include <queue>

using namespace std;


vector<int> fn(vector<int>& arr, int k) {
    priority_queue<int, vector<int>, greater<int>> min_heap;

    for (int num : arr) {
        // TODO: logic to push onto heap according to problem's criteria
        min_heap.push(num);

        if (min_heap.size() > k) {
            min_heap.pop();
        }
    }

    vector<int> result;
    while (!min_heap.empty()) {
        result.push_back(min_heap.top());
        min_heap.pop();
    }

    return result;
}
