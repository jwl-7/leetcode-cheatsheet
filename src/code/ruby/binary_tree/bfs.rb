def fn(root)
  queue = [root]
  ans   = 0

  until queue.empty?
    current_length = queue.length
    # TODO: logic for current level

    current_length.times do
      node = queue.shift
      # TODO: logic

      queue << node.left if node.left
      queue << node.right if node.right
    end
  end

  ans
end
