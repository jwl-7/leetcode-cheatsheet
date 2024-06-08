#include <vector>

using namespace std;


void fn(vector<vector<int>>& matrix) {
    int r = matrix.size();
    int c = matrix[0].size();

    vector<vector<int>> transpose(c, vector<int>(r));
    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            transpose[j][i] = matrix[i][j];
        }
    }

    vector<vector<int>> rotate_left(c, vector<int>(r));
    for (int i = 0; i < c; ++i) {
        for (int j = 0; j < r; ++j) {
            rotate_left[i][j] = transpose[c - i - 1][j];
        }
    }

    vector<vector<int>> rotate_right(c, vector<int>(r));
    for (int i = 0; i < c; ++i) {
        for (int j = 0; j < r; ++j) {
            rotate_right[i][j] = transpose[i][r - j - 1];
        }
    }
}
