#include <vector>

using namespace std;


void insertion_sort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            --j;
        }

        arr[j + 1] = key;
    }
}
