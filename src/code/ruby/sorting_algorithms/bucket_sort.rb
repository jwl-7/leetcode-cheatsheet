def bucket_sort(arr)
  num_buckets = 10
  min_num     = arr.min
  max_num     = arr.max
  bucket_size = (max_num - min_num).to_f / num_buckets
  buckets     = Array.new(num_buckets) { [] }

  arr.each do |num|
    index = [( (num - min_num) / bucket_size ).to_i, num_buckets - 1].min
    buckets[index] << num
  end

  buckets.map { |bucket| bucket.sort }.flatten
end
