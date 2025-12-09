def merge_sort(arr)
  n = arr.size
  return arr if n <= 1

  mid   = n / 2
  left  = merge_sort(arr[0...mid])
  right = merge_sort(arr[mid..-1])

  merge(left, right)
end

def merge(left, right)
  output = []

  until left.empty? || right.empty?
    if left.first <= right.first
      output << left.shift
    else
      output << right.shift
    end
  end

  output + left + right
end
