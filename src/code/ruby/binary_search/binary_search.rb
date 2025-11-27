def fn(arr, target)
  left  = 0
  right = arr.length - 1

  while left <= right
    mid = (left + right) / 2

    if arr[mid] == target
      # TODO: logic
      return
    elsif arr[mid] > target
      right = mid - 1
    else
      left = mid + 1
    end
  end

  left
end
