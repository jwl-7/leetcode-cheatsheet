def quick_sort(arr)
  n = arr.size
  return arr if n <= 1

  pivot = arr[n / 2]
  left  = arr.select { |x| x < pivot }
  right = arr.select { |x| x > pivot }

  quick_sort(left) + [pivot] + quick_sort(right)
end
