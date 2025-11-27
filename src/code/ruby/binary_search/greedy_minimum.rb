def fn(arr)
  left  = MINIMUM_POSSIBLE_ANSWER
  right = MAXIMUM_POSSIBLE_ANSWER

  while left <= right
    mid = (left + right) / 2 # int div

    if check(mid)
      right = mid - 1
    else
      left = mid + 1
    end
  end

  left
end

def check(x)
  BOOLEAN
end