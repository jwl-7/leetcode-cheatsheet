import java.util.HashMap;


public class HashMap {
    private int size;
    private Object[] bucket;

    public HashMap() {
        size = 100000;
        bucket = new Object[size];
    }

    private int hash(int key) {
        return key % size;
    }

    public void put(int key, Object value) {
        bucket[hash(key)] = value;
    }

    public Object get(int key) {
        return bucket[hash(key)];
    }

    public void remove(int key) {
        bucket[hash(key)] = null;
    }
}
