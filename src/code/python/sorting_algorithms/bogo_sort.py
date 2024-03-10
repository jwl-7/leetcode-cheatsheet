import random


def bogo_sort(arr: list) -> None:
    target = sorted(arr)

    while arr != target:
        random.shuffle(arr)
