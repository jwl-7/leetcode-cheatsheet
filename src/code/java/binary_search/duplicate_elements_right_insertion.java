public int fn(int[] arr, int target) {
    int left = 0;
    int right = arr.length;

    while (left < right) {
        int mid = (left + right) / 2;

        if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
