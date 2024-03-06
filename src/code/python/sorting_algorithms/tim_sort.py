def tim_sort(nums: list) -> list:
    n = len(nums)
    min_run = 32

    for start in range(0, n, min_run):
        end = min(start + min_run - 1, n - 1)
        insertion_sort(nums, start, end)

    size = min_run

    while size < n:
        for left in range(0, n, 2 * size):
            mid = min(n - 1, left + size - 1)
            right = min((left + 2 * size - 1), (n - 1))
            nums[left : right + 1] = merge(nums[left : mid + 1], nums[mid + 1 : right + 1])
        size *= 2

    return nums

def insertion_sort(nums: list, left: int, right: int) -> None:
    for i in range(left + 1, right + 1):
        key = nums[i]

        while i > 0 and key < nums[i - 1]:
            nums[i] = nums[i - 1]
            i -= 1

        nums[i] = key

def merge_sort(nums: list) -> list:
    n = len(nums)

    if n <= 1:
        return nums

    mid = n // 2
    left = merge_sort(nums[:mid])
    right = merge_sort(nums[mid:])

    return merge(left, right)

def merge(left: list, right: list) -> list:
    output = []

    while left and right:
        min_num = left.pop(0) if left[0] <= right[0] else right.pop(0)
        output.append(min_num)

    output.extend(left)
    output.extend(right)

    return output
