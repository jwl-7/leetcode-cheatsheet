def get_rightmost_set_bit(num: int) -> int:
    return num & -num
