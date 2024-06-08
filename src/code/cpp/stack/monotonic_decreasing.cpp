#include <stack>
#include <vector>

using namespace std;


int fn(vector<int>& arr) {
    stack<int> stack;
    int ans = 0;

    for (int num : arr) {
        while (!stack.empty() && stack.top() < num) {
            // TODO: logic
            stack.pop();
        }
        stack.push(num);
    }

    return ans;
}
