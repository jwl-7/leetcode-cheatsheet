import random


def bogo_sort(nums: list) -> None:
    target = sorted(nums)

    while nums != target:
        random.shuffle(nums)
