def dfs(root)
  stack = [root]
  ans   = 0

  until stack.empty?
    node = stack.pop
    # TODO: logic

    stack << node.left if node.left
    stack << node.right if node.right
  end

  ans
end
