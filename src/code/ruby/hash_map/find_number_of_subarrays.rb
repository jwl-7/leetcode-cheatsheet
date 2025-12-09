def fn(arr, k)
  counts    = Hash.new(0)
  counts[0] = 1
  ans       = 0
  curr      = 0

  arr.each do |num|
    # TODO: logic to change curr
    ans += counts[curr - k]
    counts[curr] += 1
  end

  ans
end
