#include <vector>

using namespace std;


int fn(vector<int>& arr1, vector<int>& arr2) {
    int i = 0;
    int j = 0;
    int ans = 0;

    while (i < arr1.size() && j < arr2.size()) {
        // TODO: logic
        if (CONDITION) {
            i += 1;
        } else {
            j += 1;
        }
    }

    while (i < arr1.size()) {
        // TODO: logic
        i += 1;
    }

    while (j < arr2.size()) {
        // TODO: logic
        j += 1;
    }

    return ans;
}
