#include <queue>

using namespace std;


int fn(TreeNode* root) {
    queue<TreeNode*> que;
    que.push(root);
    int ans = 0;

    while (!que.empty()) {
        int currentLength = que.size();
        // TODO: logic for current level

        for (int i = 0; i < currentLength; i++) {
            TreeNode* node = que.front();
            que.pop();
            // TODO: logic
            if (node->left != nullptr) {
                que.push(node->left);
            }
            if (node->right != nullptr) {
                que.push(node->right);
            }
        }
    }

    return ans;
}
