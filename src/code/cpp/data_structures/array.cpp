#include <iostream>
#include <stdexcept>

using namespace std;


template<typename T>
class Array {
private:
    T* data;
    size_t size;

public:
    Array(size_t size) : size(size) {
        data = new T[size];
    }

    ~Array() {
        delete[] data;
    }

    T& operator[](size_t index) {
        if (index >= size) {
            throw std::out_of_range("Index out of range");
        }
        return data[index];
    }

    const T& operator[](size_t index) const {
        if (index >= size) {
            throw out_of_range("Index out of range");
        }
        return data[index];
    }

    size_t len() const {
        return size;
    }

    friend ostream& operator<<(ostream& os, const Array<T>& arr) {
        os << "[";
        for (size_t i = 0; i < arr.size; ++i) {
            os << arr.data[i];
            if (i < arr.size - 1) {
                os << ", ";
            }
        }
        os << "]";
        return os;
    }
};
