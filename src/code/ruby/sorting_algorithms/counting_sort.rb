
def counting_sort(arr)
  max_num     = arr.max
  min_num     = arr.min
  count_range = max_num - min_num + 1
  count       = Array.new(count_range, 0)
  output      = Array.new(arr.size, 0)

  arr.each do |num|
    count[num - min_num] += 1
  end

  (1...count_range).each do |i|
    count[i] += count[i - 1]
  end

  arr.reverse_each do |num|
    output[count[num - min_num] - 1] = num
    count[num - min_num] -= 1
  end

  output
end
