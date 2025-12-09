def fn(arr)
  left  = MINIMUM_POSSIBLE_ANSWER
  right = MAXIMUM_POSSIBLE_ANSWER

  while left <= right
    mid = (left + right) / 2 # integer division

    if check(mid)
      left = mid + 1
    else
      right = mid - 1
    end

  end

  right
end

def check(x)
  BOOLEAN
end
