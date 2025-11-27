def heap_sort(arr)
  n = arr.size

  (n / 2 - 1).downto(0) do |i|
    heapify(arr, n, i)
  end

  (n - 1).downto(1) do |i|
    arr[i], arr[0] = arr[0], arr[i]
    heapify(arr, i, 0)
  end

  arr
end

def heapify(arr, n, i)
  largest = i
  left = 2 * i + 1
  right = 2 * i + 2

  largest = left if left < n && arr[left] > arr[largest]
  largest = right if right < n && arr[right] > arr[largest]

  if largest != i
    arr[i], arr[largest] = arr[largest], arr[i]
    heapify(arr, n, largest)
  end
end
