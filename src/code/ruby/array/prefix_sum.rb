# This method computes the prefix sum of an array.
# It returns a new array where each element at index i is the sum of elements from index 0 to i-1 in the original array.
# # For example, given the array [1, 2, 3], the prefix sum array will be [1, 3, 6].
def prefix_sum(arr)
  n       = arr.length
  prefix  = [arr[0]]

  (1...n).each do |i|
    prefix << (prefix.last + arr[i])
  end

  prefix
end
