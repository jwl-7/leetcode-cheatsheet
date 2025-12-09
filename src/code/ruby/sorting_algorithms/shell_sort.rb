def shell_sort(arr)
  n     = arr.size
  gaps  = [701, 301, 132, 57, 23, 10, 4, 1]

  gaps.each do |gap|
    (gap...n).each do |i|
      tmp = arr[i]
      j = i

      while j >= gap && arr[j - gap] > tmp
        arr[j] = arr[j - gap]
        j -= gap
      end

      arr[j] = tmp if j != i
    end
  end
end
