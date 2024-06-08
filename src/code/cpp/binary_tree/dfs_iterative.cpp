#include <stack>

using namespace std;


int dfs(TreeNode* root) {
    stack<TreeNode*> stack;
    stack.push(root);
    int ans = 0;

    while (!stack.empty()) {
        TreeNode* node = stack.top();
        stack.pop();
        // TODO: logic
        if (node->left) {
            stack.push(node->left);
        }
        if (node->right) {
            stack.push(node->right);
        }
    }

    return ans;
}
