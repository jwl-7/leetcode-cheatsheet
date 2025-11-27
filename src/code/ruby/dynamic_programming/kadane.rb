def kadane(arr)
  curr_sub  = arr[0]
  max_sub   = arr[0]

  arr[1..-1].each do |num|
    curr_sub = [curr_sub + num, num].max
    max_sub = [max_sub, curr_sub].max
  end

  max_sub
end
