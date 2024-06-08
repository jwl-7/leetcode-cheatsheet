#include <vector>

using namespace std;


void bubble_sort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n; ++i) {
        bool swapped = false;

        for (int j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
}
