#include <vector>

using namespace std;


void ShellSort(vector<int>& arr) {
    int n = arr.size();
    vector<int> gaps = {701, 301, 132, 57, 23, 10, 4, 1};

    for (int gap : gaps) {
        for (int i = gap; i < n; ++i) {
            int tmp = arr[i];
            int j = i;

            while (j >= gap && arr[j - gap] > tmp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            if (j != i) {
                arr[j] = tmp;
            }
        }
    }
}
