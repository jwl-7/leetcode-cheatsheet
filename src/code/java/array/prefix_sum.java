public int[] fn(int[] arr) {
    int n = arr.length;
    int[] prefix = new int[n];
    prefix.add(arr[0]);

    for (int i = 1; i < n; i++) {
        prefix.add(prefix.get(i - 1) + arr[i]);
    }

    return prefix;
}
