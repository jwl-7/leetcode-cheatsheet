def fn(matrix)
  r = matrix.size
  c = matrix[0].size

  create_matrix = Array.new(r) { Array.new(c, 0) }
  copy_matrix = matrix.map(&:dup)
end
