def radix_sort(arr)
  max_val = arr.max
  exp     = 1

  while max_val / exp > 0
    counting_sort(arr, exp)
    exp *= 10
  end
end

def counting_sort(arr, exp)
  n       = arr.size
  output  = Array.new(n, 0)
  count   = Array.new(10, 0)

  n.times do |i|
    idx = arr[i] / exp
    count[idx % 10] += 1
  end

  (1...10).each do |i|
    count[i] += count[i - 1]
  end

  (n - 1).downto(0) do |i|
    idx = arr[i] / exp
    output[count[idx % 10] - 1] = arr[i]
    count[idx % 10] -= 1
  end

  n.times do |i|
    arr[i] = output[i]
  end
end
