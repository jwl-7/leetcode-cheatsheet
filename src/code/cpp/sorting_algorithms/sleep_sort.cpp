#include <thread>
#include <vector>
#include <chrono>

using namespace std;


void snorlax(double num, vector<double>& arr) {
    this_thread::sleep_for(chrono::milliseconds(static_cast<int>(num)));
    arr.push_back(num);
}

vector<double> sleep_sort(vector<double>& arr) {
    vector<double> sorted_arr;
    vector<thread> threads;

    for (double num : arr) {
        threads.emplace_back(snorlax, num, ref(sorted_arr));
    }

    for (thread& t : threads) {
        t.join();
    }

    return sorted_arr;
}
