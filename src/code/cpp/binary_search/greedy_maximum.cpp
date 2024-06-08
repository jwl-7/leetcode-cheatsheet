#include <vector>

using namespace std;


bool check(int x) {
    return BOOLEAN;
}

int fn(vector<int>& arr) {
    int left = MINIMUM_POSSIBLE_ANSWER;
    int right = MAXIMUM_POSSIBLE_ANSWER;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (check(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}
