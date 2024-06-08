#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;


void CubeSort(vector<int>& arr, int processors) {
    int n = arr.size();
    vector<vector<int>> subarrays;
    int subarray_size = n / processors;

    for (int i = 0; i < processors; ++i) {
        vector<int> subarray(arr.begin() + i * subarray_size, arr.begin() + (i + 1) * subarray_size);
        sort(subarray.begin(), subarray.end());
        subarrays.push_back(subarray);
    }

    for (int dimension = 0; dimension < log2(processors); ++dimension) {
        for (int i = 0; i < processors; ++i) {
            int partner = i ^ (1 << dimension);
            vector<int> merged;
            if (i < partner) {
                merged = subarrays[i];
                merged.insert(merged.end(), subarrays[partner].begin(), subarrays[partner].end());
            } else {
                merged = subarrays[partner];
                merged.insert(merged.end(), subarrays[i].begin(), subarrays[i].end());
            }
            sort(merged.begin(), merged.end());
            subarrays[i].assign(merged.begin(), merged.begin() + subarray_size);
            subarrays[partner].assign(merged.begin() + subarray_size, merged.end());
        }
    }

    arr.clear();
    for (auto& subarray : subarrays) {
        arr.insert(arr.end(), subarray.begin(), subarray.end());
    }
}
