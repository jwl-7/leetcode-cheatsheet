def counting_sort(nums: list) -> list:
    max_num = max(nums)
    min_num = min(nums)
    count_range = max_num - min_num + 1
    count = [0] * count_range
    output = [0] * len(nums)

    for num in nums:
        count[num - min_num] += 1

    for i in range(1, count_range):
        count[i] += count[i - 1]

    for num in nums[::-1]:
        output[count[num - min_num] - 1] = num
        count[num - min_num] -= 1

    return output
