#include <vector>

using namespace std;


void pancake_sort(vector<int>& arr) {
    int n = arr.size();

    for (int size = n; size >= 2; --size) {
        int max_idx = find_max_index(arr, size);

        if (max_idx != size - 1) {
            flip(arr, max_idx);
            flip(arr, size - 1);
        }
    }
}

void flip(vector<int>& arr, int i) {
    int left = 0;

    while (left < i) {
        swap(arr[left], arr[i]);
        left++;
        i--;
    }
}

int find_max_index(vector<int>& arr, int n) {
    int max_idx = 0;

    for (int i = 0; i < n; ++i) {
        if (arr[i] > arr[max_idx]) {
            max_idx = i;
        }
    }

    return max_idx;
}
