import java.util.Arrays;


public int[] mergeSort(int[] arr) {
    int n = arr.length;

    if (n <= 1) {
        return arr;
    }

    int mid = n / 2;
    int[] left = Arrays.copyOfRange(arr, 0, mid);
    int[] right = Arrays.copyOfRange(arr, mid, n);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

public int[] merge(int[] left, int[] right) {
    int[] output = new int[left.length + right.length];
    int i = 0, j = 0, k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            output[k++] = left[i++];
        } else {
            output[k++] = right[j++];
        }
    }

    while (i < left.length) {
        output[k++] = left[i++];
    }

    while (j < right.length) {
        output[k++] = right[j++];
    }

    return output;
}
