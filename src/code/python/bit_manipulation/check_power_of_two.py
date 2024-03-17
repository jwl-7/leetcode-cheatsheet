def is_power_of_two(num: int) -> bool:
    return (num & (num - 1)) == 0
