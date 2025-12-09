def sleep_sort(arr)
  sorted_arr  = []
  threads     = []

  arr.each do |num|
    threads << Thread.new do
      sleep(num / 1000.0)
      sorted_arr << num
    end
  end

  threads.each(&:join)
  sorted_arr
end
