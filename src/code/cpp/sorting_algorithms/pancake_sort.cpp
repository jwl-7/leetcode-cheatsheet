#include <vector>

using namespace std;


int FindMaxIndex(vector<int>& arr, int n) {
    int max_idx = 0;

    for (int i = 0; i < n; ++i) {
        if (arr[i] > arr[max_idx]) {
            max_idx = i;
        }
    }

    return max_idx;
}

void Flip(vector<int>& arr, int i) {
    int left = 0;

    while (left < i) {
        swap(arr[left], arr[i]);
        left++;
        i--;
    }
}

void PancakeSort(vector<int>& arr) {
    int n = arr.size();

    for (int size = n; size >= 2; --size) {
        int max_idx = FindMaxIndex(arr, size);

        if (max_idx != size - 1) {
            Flip(arr, max_idx);
            Flip(arr, size - 1);
        }
    }
}
