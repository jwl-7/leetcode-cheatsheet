#include <vector>
#include <unordered_set>

using namespace std;


int fn(vector<int>& arr) {
    unordered_set<int> window;
    int ans = 0;
    int left = 0;

    for (int right = 0; right < arr.size(); right++) {
        int ELEMENT = arr[right];
        // TODO: add arr[right] to window

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            left++;
        }

        // TODO: update ans
    }

    return ans;
}
