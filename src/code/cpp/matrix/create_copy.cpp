#include <vector>

using namespace std;


void fn(vector<vector<int>>& matrix) {
    int r = matrix.size();
    int c = matrix[0].size();

    vector<vector<int>> create_matrix(r, vector<int>(c, 0));
    vector<vector<int>> copy_matrix(matrix);
}
