def fn(matrix)
  r = matrix.size
  c = matrix[0].size

  main_diagonal = (0...[r, c].min).map { |i| matrix[i][i] }
  anti_diagonal = (0...[r, c].min).map { |i| matrix[i][-i - 1] }
end
