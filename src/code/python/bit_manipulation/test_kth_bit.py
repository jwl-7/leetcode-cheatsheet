def test_kth_bit(num: int, k: int) -> bool:
    return num & (1 << k) != 0
