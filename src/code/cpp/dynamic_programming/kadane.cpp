#include <vector>
#include <algorithm>

using namespace std;


int kadane(vector<int>& arr) {
    int curr_sub = arr[0];
    int max_sub = arr[0];

    for (size_t i = 1; i < arr.size(); ++i) {
        curr_sub = max(curr_sub + arr[i], arr[i]);
        max_sub = max(max_sub, curr_sub);
    }

    return max_sub;
}
