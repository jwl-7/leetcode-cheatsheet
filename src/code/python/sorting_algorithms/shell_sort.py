def shell_sort(nums: list) -> None:
    n = len(nums)
    gaps = [701, 301, 132, 57, 23, 10, 4, 1]

    for gap in gaps:
        for i in range(gap, n):
            tmp = nums[i]
            j = i

            while j >= gap and nums[j - gap] > tmp:
                nums[j] = nums[j - gap]
                j -= gap

            if j != i:
                nums[j] = tmp
