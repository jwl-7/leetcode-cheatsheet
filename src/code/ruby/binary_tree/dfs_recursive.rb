def dfs(root)
  return unless root

  ans = 0

  # TODO: logic
  dfs(root.left)
  dfs(root.right)

  ans
end
