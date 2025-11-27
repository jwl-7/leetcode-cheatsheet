# in-memory swaps
# unnecessary for modern languages
def swap_variables(num1, num2)
  num1 ^= num2
  num2 ^= num1
  num1 ^= num2

  return num1, num2
end
