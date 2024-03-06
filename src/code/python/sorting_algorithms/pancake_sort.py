def pancake_sort(nums: list) -> None:
    n = len(nums)

    for size in range(n, 1, -1):
        max_index = find_max_index(nums, size)

        if max_index != size - 1:
            flip(nums, max_index)
            flip(nums, size - 1)

def flip(nums: list, i: int) -> None:
    left = 0

    while left < i:
        nums[left], nums[i] = nums[i], nums[left]
        left += 1
        i -= 1

def find_max_index(nums: list, n: int) -> int:
    max_idx = 0

    for i in range(n):
        if nums[i] > nums[max_idx]:
            max_idx = i

    return max_idx
