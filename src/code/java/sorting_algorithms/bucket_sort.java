import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;


public static int[] bucketSort(int[] arr) {
    int numBuckets = 10;
    int index;
    int[] result = new int[arr.length];
    int minNum = Arrays.stream(arr).min().getAsInt();
    int maxNum = Arrays.stream(arr).max().getAsInt();
    double bucketSize = (double) (maxNum - minNum) / numBuckets;
    List<List<Integer>> buckets = new ArrayList<>(numBuckets);

    for (int i = 0; i < numBuckets; i++) {
        buckets.add(new ArrayList<>());
    }

    for (int num : arr) {
        index = Math.min((int) ((num - minNum) / bucketSize), numBuckets - 1);
        buckets.get(index).add(num);
    }

    index = 0;

    for (List<Integer> bucket : buckets) {
        Collections.sort(bucket);

        for (int num : bucket) {
            result[index++] = num;
        }
    }

    return result;
}
