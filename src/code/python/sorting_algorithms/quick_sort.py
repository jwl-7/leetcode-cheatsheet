def quick_sort(nums: list) -> list:
    n = len(nums)

    if n <= 1:
        return nums

    pivot = nums[n // 2]
    left = [x for x in nums if x < pivot]
    right = [x for x in nums if x > pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)
