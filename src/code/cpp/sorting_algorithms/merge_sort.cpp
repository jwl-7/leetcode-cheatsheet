#include <vector>

using namespace std;


vector<int> Merge(vector<int>& left, vector<int>& right) {
    vector<int> output;

    while (!left.empty() && !right.empty()) {
        int min_num = (left[0] <= right[0]) ? left[0] : right[0];
        output.push_back(min_num);

        if (left[0] <= right[0]) {
            left.erase(left.begin());
        } else {
            right.erase(right.begin());
        }
    }

    output.insert(output.end(), left.begin(), left.end());
    output.insert(output.end(), right.begin(), right.end());

    return output;
}

vector<int> MergeSort(vector<int>& arr) {
    int n = arr.size();

    if (n <= 1) {
        return arr;
    }

    int mid = n / 2;
    vector<int> left(arr.begin(), arr.begin() + mid);
    vector<int> right(arr.begin() + mid, arr.end());

    left = MergeSort(left);
    right = MergeSort(right);

    return Merge(left, right);
}
