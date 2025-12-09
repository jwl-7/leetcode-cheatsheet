def tim_sort(arr)
  n       = arr.size
  min_run = 32

  (0...n).step(min_run) do |start_idx|
    end_idx = [start_idx + min_run - 1, n - 1].min
    insertion_sort(arr, start_idx, end_idx)
  end

  size = min_run

  while size < n
    (0...n).step(2 * size) do |left|
      mid = [left + size - 1, n - 1].min
      right = [left + 2 * size - 1, n - 1].min
      arr[left..right] = merge(arr[left..mid], arr[(mid + 1)..right])
    end
    size *= 2
  end

  arr
end

def insertion_sort(arr, left, right)
  (left + 1..right).each do |i|
    key = arr[i]
    j = i
    while j > left && key < arr[j - 1]
      arr[j] = arr[j - 1]
      j -= 1
    end
    arr[j] = key
  end
end

def merge_sort(arr)
  return arr if arr.size <= 1

  mid = arr.size / 2
  left = merge_sort(arr[0...mid])
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
