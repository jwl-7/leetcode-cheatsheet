def pancake_sort(arr)
  n = arr.size

  (2..n).to_a.reverse.each do |size|
    max_idx = find_max_index(arr, size)

    if max_idx != size - 1
      flip(arr, max_idx)
      flip(arr, size - 1)
    end
  end
end

def flip(arr, i)
  left = 0

  while left < i
    arr[left], arr[i] = arr[i], arr[left]
    left += 1
    i -= 1
  end
end

def find_max_index(arr, n)
  max_idx = 0

  n.times do |i|
    max_idx = i if arr[i] > arr[max_idx]
  end

  max_idx
end
