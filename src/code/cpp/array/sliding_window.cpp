#include <vector>

using namespace std;


int fn(vector<int>& arr) {
    int n = arr.size();
    int window = 0;
    int left = 0;
    int ans = 0;

    for (int right = 0; right < n; right++) {
        // TODO: add arr[right] to window
        window += arr[right];

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            window -= arr[left];
            left += 1;
        }

        // TODO: update ans
    }

    return ans;
}
