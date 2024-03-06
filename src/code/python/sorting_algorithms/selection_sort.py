def selection_sort(nums: list) -> None:
    n = len(nums)

    for i in range(n):
        min_i = i

        for j in range(i + 1, n):
            if nums[j] < nums[min_i]:
                min_i = j

        if min_i != i:
            nums[i], nums[min_i] = nums[min_i], nums[i]
