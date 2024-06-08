#include <tuple>

using namespace std;


tuple<int, int> swap_variables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return std::make_tuple(num1, num2);
}
