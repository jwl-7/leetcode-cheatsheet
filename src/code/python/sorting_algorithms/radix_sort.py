def radix_sort(nums: list) -> None:
    max_val = max(nums)
    exp = 1

    while max_val // exp > 0:
        counting_sort(nums, exp)
        exp *= 10

def counting_sort(nums: list, exp: int) -> None:
    n = len(nums)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        idx = nums[i] // exp
        count[idx % 10] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    i = n - 1

    while i >= 0:
        idx = nums[i] // exp
        output[count[idx % 10] - 1] = nums[i]
        count[idx % 10] -= 1
        i -= 1

    for i in range(n):
        nums[i] = output[i]
