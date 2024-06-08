import java.util.Arrays;


public static void radixSort(int[] arr) {
    int maxVal = Arrays.stream(arr).max().getAsInt();
    int exp = 1;

    while (maxVal / exp > 0) {
        countingSort(arr, exp);
        exp *= 10;
    }
}

public static void countingSort(int[] arr, int exp) {
    int n = arr.length;
    int[] output = new int[n];
    int[] count = new int[10];

    for (int i = 0; i < n; i++) {
        int idx = arr[i] / exp;
        count[idx % 10]++;
    }

    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (int i = n - 1; i >= 0; i--) {
        int idx = arr[i] / exp;
        output[count[idx % 10] - 1] = arr[i];
        count[idx % 10]--;
    }

    System.arraycopy(output, 0, arr, 0, n);
}
