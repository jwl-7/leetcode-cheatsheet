import java.util.ArrayList;
import java.util.List;


public static void fn(List<List<Integer>> matrix) {
    int r = matrix.size();
    int c = matrix.get(0).size();

    List<List<Integer>> transpose = new ArrayList<>();
    for (int j = 0; j < c; j++) {
        List<Integer> newRow = new ArrayList<>();
        for (int i = 0; i < r; i++) {
            newRow.add(matrix.get(i).get(j));
        }
        transpose.add(newRow);
    }

    List<List<Integer>> rotateLeft = new ArrayList<>();
    for (int i = transpose.size() - 1; i >= 0; i--) {
        rotateLeft.add(transpose.get(i));
    }

    List<List<Integer>> rotateRight = new ArrayList<>();
    for (List<Integer> row : transpose) {
        List<Integer> newRow = new ArrayList<>();
        for (int i = row.size() - 1; i >= 0; i--) {
            newRow.add(row.get(i));
        }
        rotateRight.add(newRow);
    }
}
