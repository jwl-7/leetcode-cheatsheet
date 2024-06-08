public int dfs(TreeNode root) {
    if (root == null) {
        return;
    }

    int ans = 0;

    // TODO: logic
    ans += dfs(root.left);
    ans += dfs(root.right);

    return ans;
}
