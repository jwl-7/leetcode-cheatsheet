def selection_sort(arr)
  n = arr.size

  n.times do |i|
    min_i = i

    ((i + 1)...n).each do |j|
      min_i = j if arr[j] < arr[min_i]
    end

    arr[i], arr[min_i] = arr[min_i], arr[i] if min_i != i
  end
end
