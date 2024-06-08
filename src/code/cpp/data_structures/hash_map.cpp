#include <iostream>
#include <vector>

using namespace std;


template<typename KeyType, typename ValueType>
class HashMap {
private:
    const size_t size = 100000;
    vector<pair<KeyType, ValueType>> buckets[size];

    size_t hash(const KeyType& key) {
        return hash<KeyType>{}(key) % size;
    }

public:
    HashMap() {}

    void setItem(const KeyType& key, const ValueType& value) {
        size_t index = hash(key);

        for (auto& pair : buckets[index]) {
            if (pair.first == key) {
                pair.second = value;
                return;
            }
        }

        buckets[index].emplace_back(key, value);
    }

    ValueType& getItem(const KeyType& key) {
        size_t index = hash(key);

        for (auto& pair : buckets[index]) {
            if (pair.first == key) {
                return pair.second;
            }
        }

        throw out_of_range("Key not found");
    }

    void delItem(const KeyType& key) {
        size_t index = hash(key);

        for (auto it = buckets[index].begin(); it != buckets[index].end(); ++it) {
            if (it->first == key) {
                buckets[index].erase(it);
                return;
            }
        }
    }
};
