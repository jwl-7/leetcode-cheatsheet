public void pancakeSort(int[] arr) {
    int n = arr.length;

    for (int size = n; size >= 2; size--) {
        int maxIdx = findMaxIndex(arr, size);

        if (maxIdx != size - 1) {
            flip(arr, maxIdx);
            flip(arr, size - 1);
        }
    }
}

public void flip(int[] arr, int i) {
    int left = 0;

    while (left < i) {
        int temp = arr[left];
        arr[left] = arr[i];
        arr[i] = temp;
        left++;
        i--;
    }
}

public int findMaxIndex(int[] arr, int n) {
    int maxIdx = 0;

    for (int i = 0; i < n; i++) {
        if (arr[i] > arr[maxIdx]) {
            maxIdx = i;
        }
    }

    return maxIdx;
}
