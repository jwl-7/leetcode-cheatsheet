def fn(arr, k)
  heap = []

  arr.each do |num|
    # TODO: logic to push onto heap according to problem's criteria
    heap.push([CRITERIA, num])

    if heap.size > k
      # TODO: pop the top element from heap
      heap.pop
    end
  end

  heap.map { |item| item[1] }
end
