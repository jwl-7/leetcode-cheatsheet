public int dfs(TreeNode root) {
    if (root == null) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    ans += dfs(root.left);
    ans += dfs(root.right);

    return ans;
}
