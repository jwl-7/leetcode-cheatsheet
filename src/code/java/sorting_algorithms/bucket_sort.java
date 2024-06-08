import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public List<Integer> bucketSort(List<Integer> arr) {
    int numBuckets = 10;
    int minNum = Collections.min(arr);
    int maxNum = Collections.max(arr);
    double bucketSize = (double) (maxNum - minNum) / numBuckets;
    List<List<Integer>> buckets = new ArrayList<>(numBuckets);

    for (int i = 0; i < numBuckets; i++) {
        buckets.add(new ArrayList<>());
    }

    for (int num : arr) {
        int index = Math.min((int) ((num - minNum) / bucketSize), numBuckets - 1);
        buckets.get(index).add(num);
    }

    List<Integer> result = new ArrayList<>();
    for (List<Integer> bucket : buckets) {
        Collections.sort(bucket);
        result.addAll(bucket);
    }

    return result;
}
