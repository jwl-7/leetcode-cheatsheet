#include <vector>
#include <unordered_map>

using namespace std;


int fn(vector<int>& arr, int k) {
    unordered_map<int, int> counts;
    counts[0] = 1;
    int ans = 0;
    int curr = 0;

    for (int num : arr) {
        // TODO: logic to change curr
        ans += counts[curr - k];
        counts[curr]++;
    }

    return ans;
}
