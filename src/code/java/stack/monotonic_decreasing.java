import java.util.Stack;


public int fn(int[] arr) {
    Stack<Integer> stack = new Stack<>();
    int ans = 0;

    for (int num : arr) {
        while (!stack.isEmpty() && stack.peek() < num) {
            // TODO: logic
            stack.pop();
        }
        stack.push(num);
    }

    return ans;
}
