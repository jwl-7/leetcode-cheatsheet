#include <vector>

using namespace std;


vector<int> QuickSort(vector<int>& arr) {
    int n = arr.size();

    if (n <= 1) {
        return arr;
    }

    int pivot = arr[n / 2];
    vector<int> left, right;

    for (int x : arr) {
        if (x < pivot) {
            left.push_back(x);
        } else if (x > pivot) {
            right.push_back(x);
        }
    }

    left = QuickSort(left);
    right = QuickSort(right);

    left.push_back(pivot);
    left.insert(left.end(), right.begin(), right.end());

    return left;
}
