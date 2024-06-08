import java.util.ArrayList;
import java.util.List;


public void fn(List<List<Integer>> matrix) {
    int r = matrix.size();
    int c = matrix.get(0).size();

    List<List<Integer>> createMatrix = new ArrayList<>();
    for (int i = 0; i < r; i++) {
        List<Integer> row = new ArrayList<>();
        for (int j = 0; j < c; j++) {
            row.add(0);
        }
        createMatrix.add(row);
    }

    List<List<Integer>> copyMatrix = new ArrayList<>();
    for (List<Integer> row : matrix) {
        copyMatrix.add(new ArrayList<>(row));
    }
}
