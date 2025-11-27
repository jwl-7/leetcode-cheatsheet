def bogo_sort(arr)
  target = arr.sort

  until arr == target
    arr.shuffle!
  end
end
