import java.util.ArrayList;
import java.util.List;


public void fn(List<List<Integer>> matrix) {
    List<List<Integer>> createMatrix = new ArrayList<>();
    List<List<Integer>> copyMatrix = new ArrayList<>();
    int r = matrix.size();
    int c = matrix.get(0).size();

    for (int i = 0; i < r; i++) {
        List<Integer> row = new ArrayList<>();

        for (int j = 0; j < c; j++) {
            row.add(0);
        }

        createMatrix.add(row);
    }

    for (List<Integer> row : matrix) {
        copyMatrix.add(new ArrayList<>(row));
    }
}
