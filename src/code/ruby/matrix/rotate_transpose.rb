def fn(matrix)
  r = matrix.size
  c = matrix[0].size

  transpose = matrix[0].zip(*matrix[1..-1])
  rotate_left = transpose.reverse
  rotate_right = transpose.map(&:reverse)
end
