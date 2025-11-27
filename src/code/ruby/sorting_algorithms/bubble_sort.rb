def bubble_sort(arr)
  n = arr.size

  n.times do |i|
    swapped = false

    (0...(n - i - 1)).each do |j|
      if arr[j] > arr[j + 1]
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
        swapped = true
      end
    end

    break unless swapped
  end
end
