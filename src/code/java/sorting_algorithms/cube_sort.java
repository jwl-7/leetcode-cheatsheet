import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public static void cubeSort(int[] arr, int processors) {
    int n = arr.length;
    List<int[]> subarrays = new ArrayList<>();
    int subarraySize = (n + processors - 1) / processors;

    for (int i = 0; i < processors; i++) {
        int[] subarray = new int[Math.min(subarraySize, n - i * subarraySize)];
        System.arraycopy(arr, i * subarraySize, subarray, 0, subarray.length);
        Arrays.sort(subarray);
        subarrays.add(subarray);
    }

    for (int dimension = 0; dimension < Integer.SIZE - 1; dimension++) {
        for (int i = 0; i < processors; i++) {
            int partner = i ^ (1 << dimension);

            if (i < partner && partner < processors) {
                int[] merged = merge(subarrays.get(i), subarrays.get(partner));
                System.arraycopy(merged, 0, subarrays.get(i), 0, subarraySize);
                System.arraycopy(merged, subarraySize, subarrays.get(partner), 0, subarraySize);
            }
        }
    }

    int index = 0;

    for (int[] subarray : subarrays) {
        for (int num : subarray) {
            arr[index++] = num;
        }
    }
}

public static int[] merge(int[] arr1, int[] arr2) {
    int[] merged = new int[arr1.length + arr2.length];
    int i = 0, j = 0, k = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged[k++] = arr1[i++];
        } else {
            merged[k++] = arr2[j++];
        }
    }

    while (i < arr1.length) {
        merged[k++] = arr1[i++];
    }

    while (j < arr2.length) {
        merged[k++] = arr2[j++];
    }

    return merged;
}
