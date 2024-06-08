#include <vector>
#include <algorithm>

using namespace std;


vector<int> bucket_sort(vector<int>& arr) {
    int num_buckets = 10;
    int min_num = *min_element(arr.begin(), arr.end());
    int max_num = *max_element(arr.begin(), arr.end());
    double bucket_size = static_cast<double>(max_num - min_num) / num_buckets;
    vector<vector<int>> buckets(num_buckets);

    for (int num : arr) {
        int index = min(static_cast<int>((num - min_num) / bucket_size), num_buckets - 1);
        buckets[index].push_back(num);
    }

    vector<int> result;
    for (auto& bucket : buckets) {
        sort(bucket.begin(), bucket.end());
        result.insert(result.end(), bucket.begin(), bucket.end());
    }

    return result;
}
