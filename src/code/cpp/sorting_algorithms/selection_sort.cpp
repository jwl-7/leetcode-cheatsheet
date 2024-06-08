#include <vector>

using namespace std;


void SelectionSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n; ++i) {
        int min_i = i;

        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[min_i]) {
                min_i = j;
            }
        }

        if (min_i != i) {
            swap(arr[i], arr[min_i]);
        }
    }
}
