def fn(arr)
  stack = []
  ans   = 0

  arr.each do |num|
    while !stack.empty? && stack[-1] > num
      # TODO: logic
      stack.pop
    end
    stack << num
  end

  ans
end
