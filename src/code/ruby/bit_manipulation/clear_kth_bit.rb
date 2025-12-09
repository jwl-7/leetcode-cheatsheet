def clear_kth_bit(num, k)
  num & ~(1 << k)
end
