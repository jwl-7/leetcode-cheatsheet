def cube_sort(arr, processors)
  n             = arr.size
  subarrays     = []
  subarray_size = n / processors

  (0...processors).each do |i|
    subarray = arr[i * subarray_size, subarray_size]
    subarrays << subarray
  end

  subarrays.each(&:sort!)

  (0...(processors.bit_length - 1)).each do |dimension|
    (0...processors).each do |i|
      partner = i ^ (1 << dimension)
      if i < partner
        merged = subarrays[i] + subarrays[partner]
      else
        merged = subarrays[partner] + subarrays[i]
      end
      merged.sort!
      subarrays[i] = merged[0...subarray_size]
      subarrays[partner] = merged[subarray_size, subarray_size]
    end
  end

  arr.replace(subarrays.flatten)
end
