import java.util.ArrayList;
import java.util.List;


public int[] quickSort(int[] arr) {
    int n = arr.length;

    if (n <= 1) {
        return arr;
    }

    int pivot = arr[n / 2];
    List<Integer> left = new ArrayList<>();
    List<Integer> right = new ArrayList<>();

    for (int x : arr) {
        if (x < pivot) {
            left.add(x);
        } else if (x > pivot) {
            right.add(x);
        }
    }

    int[] sortedLeft = quickSort(left.stream().mapToInt(i -> i).toArray());
    int[] sortedRight = quickSort(right.stream().mapToInt(i -> i).toArray());

    int[] result = new int[n];
    System.arraycopy(sortedLeft, 0, result, 0, sortedLeft.length);
    result[sortedLeft.length] = pivot;
    System.arraycopy(sortedRight, 0, result, sortedLeft.length + 1, sortedRight.length);

    return result;
}
