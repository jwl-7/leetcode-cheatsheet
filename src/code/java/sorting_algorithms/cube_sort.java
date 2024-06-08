import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public void cubeSort(int[] arr, int processors) {
    int n = arr.length;
    List<int[]> subarrays = new ArrayList<>();
    int subarraySize = n / processors;

    for (int i = 0; i < processors; i++) {
        int[] subarray = Arrays.copyOfRange(arr, i * subarraySize, (i + 1) * subarraySize);
        Arrays.sort(subarray);
        subarrays.add(subarray);
    }

    for (int dimension = 0; dimension < Integer.SIZE - 1; dimension++) {
        for (int i = 0; i < processors; i++) {
            int partner = i ^ (1 << dimension);
            if (i < partner) {
                int[] merged = merge(subarrays.get(i), subarrays.get(partner));
                subarrays.set(i, Arrays.copyOfRange(merged, 0, subarraySize));
                subarrays.set(partner, Arrays.copyOfRange(merged, subarraySize, merged.length));
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

public int[] merge(int[] arr1, int[] arr2) {
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
