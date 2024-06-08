import java.util.ArrayList;
import java.util.List;


public void fn(List<List<Integer>> matrix) {
    int r = matrix.size();
    int c = matrix.get(0).size();

    List<Integer> mainDiagonal = new ArrayList<>();
    for (int i = 0; i < Math.min(r, c); i++) {
        mainDiagonal.add(matrix.get(i).get(i));
    }

    List<Integer> antiDiagonal = new ArrayList<>();
    for (int i = 0; i < Math.min(r, c); i++) {
        antiDiagonal.add(matrix.get(i).get(c - 1 - i));
    }
}
