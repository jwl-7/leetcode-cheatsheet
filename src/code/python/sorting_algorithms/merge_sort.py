def merge_sort(arr: list) -> list:
    n = len(arr)

    if n <= 1:
        return arr

    mid = n // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left: list, right: list) -> list:
    output = []

    while left and right:
        min_num = left.pop(0) if left[0] <= right[0] else right.pop(0)
        output.append(min_num)

    output.extend(left)
    output.extend(right)

    return output
