#include <vector>
#include <algorithm>

using namespace std;


void InsertionSort(vector<double>& arr, int left, int right) {
    for (int i = left + 1; i <= right; ++i) {
        double key = arr[i];
        int j = i - 1;

        while (j >= left && arr[j] > key) {
            arr[j + 1] = arr[j];
            --j;
        }

        arr[j + 1] = key;
    }
}

vector<double> Merge(const vector<double>& left, const vector<double>& right) {
    vector<double> output;

    int left_index = 0;
    int right_index = 0;

    while (left_index < left.size() && right_index < right.size()) {
        if (left[left_index] <= right[right_index]) {
            output.push_back(left[left_index++]);
        } else {
            output.push_back(right[right_index++]);
        }
    }

    while (left_index < left.size()) {
        output.push_back(left[left_index++]);
    }

    while (right_index < right.size()) {
        output.push_back(right[right_index++]);
    }

    return output;
}

vector<double> TimSort(vector<double>& arr) {
    int n = arr.size();
    int min_run = 32;

    for (int start = 0; start < n; start += min_run) {
        int end = min(start + min_run - 1, n - 1);
        InsertionSort(arr, start, end);
    }

    int size = min_run;

    while (size < n) {
        for (int left = 0; left < n; left += 2 * size) {
            int mid = min(n - 1, left + size - 1);
            int right = min((left + 2 * size - 1), (n - 1));
            vector<double> merged = Merge(
                vector<double>(arr.begin() + left, arr.begin() + mid + 1),
                vector<double>(arr.begin() + mid + 1, arr.begin() + right + 1)
            );
            copy(merged.begin(), merged.end(), arr.begin() + left);
        }
        size *= 2;
    }

    return arr;
}
