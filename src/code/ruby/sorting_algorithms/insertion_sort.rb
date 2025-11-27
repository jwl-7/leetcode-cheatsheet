def insertion_sort(arr)
  n = arr.size

  (1...n).each do |i|
    key = arr[i]
    j = i - 1

    while j >= 0 && key < arr[j]
      arr[j + 1] = arr[j]
      j -= 1
    end

    arr[j + 1] = key
  end
end
