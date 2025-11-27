def test_kth_bit(num, k)
  num & (1 << k) != 0
end
