import java.util.Arrays;
import java.util.Random;


public static void bogoSort(int[] arr) {
    int[] target = Arrays.copyOf(arr, arr.length);
    Arrays.sort(target);

    while (!Arrays.equals(arr, target)) {
        shuffleArray(arr);
    }
}

public static void shuffleArray(int[] arr) {
    Random rnd = new Random();

    for (int i = arr.length - 1; i > 0; i--) {
        int index = rnd.nextInt(i + 1);
        int temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }
}
