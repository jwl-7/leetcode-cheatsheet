#include <chrono>
#include <thread>
#include <vector>

using namespace std;


void Snorlax(double num, vector<double>& arr) {
    this_thread::sleep_for(chrono::milliseconds(static_cast<int>(num)));
    arr.push_back(num);
}

vector<double> SleepSort(vector<double>& arr) {
    vector<double> sorted_arr;
    vector<thread> threads;

    for (double num : arr) {
        threads.emplace_back(Snorlax, num, ref(sorted_arr));
    }

    for (thread& t : threads) {
        t.join();
    }

    return sorted_arr;
}
