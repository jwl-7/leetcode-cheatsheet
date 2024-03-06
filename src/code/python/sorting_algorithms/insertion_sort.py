def insertion_sort(nums: list) -> None:
    n = len(nums)

    for i in range(1, n):
        key = nums[i]

        while i > 0 and key < nums[i - 1]:
            nums[i] = nums[i - 1]
            i -= 1

        nums[i] = key
