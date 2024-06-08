#include <vector>

using namespace std;


int fn(vector<int>& arr) {
    int ans = 0;
    int left = 0;
    int right = arr.size() - 1;

    while (left < right) {
        // TODO: logic with left and right
        if (CONDITION) {
            left++;
        } else {
            right--;
        }
    }

    return ans;
}
