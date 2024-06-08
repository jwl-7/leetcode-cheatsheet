#include <vector>
#include <algorithm>

using namespace std;


void insertion_sort(vector<double>& arr, int left, int right) {
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

vector<double> merge(vector<double>& left, vector<double>& right) {
    vector<double> output;

    while (!left.empty() && !right.empty()) {
        double min_num = (left[0] <= right[0]) ? left[0] : right[0];
        if (left[0] <= right[0]) {
            min_num = left[0];
            left.erase(left.begin());
        } else {
            min_num = right[0];
            right.erase(right.begin());
        }
        output.push_back(min_num);
    }

    output.insert(output.end(), left.begin(), left.end());
    output.insert(output.end(), right.begin(), right.end());

    return output;
}

vector<double> merge_sort(vector<double>& arr) {
    int n = arr.size();

    if (n <= 1) {
        return arr;
    }

    int mid = n / 2;
    vector<double> left(arr.begin(), arr.begin() + mid);
    vector<double> right(arr.begin() + mid, arr.end());

    left = merge_sort(left);
    right = merge_sort(right);

    return merge(left, right);
}

vector<double> tim_sort(vector<double>& arr) {
    int n = arr.size();
    int min_run = 32;

    for (int start = 0; start < n; start += min_run) {
        int end = min(start + min_run - 1, n - 1);
        insertion_sort(arr, start, end);
    }

    int size = min_run;

    while (size < n) {
        for (int left = 0; left < n; left += 2 * size) {
            int mid = min(n - 1, left + size - 1);
            int right = min((left + 2 * size - 1), (n - 1));
            vector<double> merged = merge(vector<double>(arr.begin() + left, arr.begin() + mid + 1),
                                          vector<double>(arr.begin() + mid + 1, arr.begin() + right + 1));
            copy(merged.begin(), merged.end(), arr.begin() + left);
        }
        size *= 2;
    }

    return arr;
}
