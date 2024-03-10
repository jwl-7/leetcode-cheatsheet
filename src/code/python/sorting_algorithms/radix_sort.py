def radix_sort(arr: list) -> None:
    max_val = max(arr)
    exp = 1

    while max_val // exp > 0:
        counting_sort(arr, exp)
        exp *= 10

def counting_sort(arr: list, exp: int) -> None:
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        idx = arr[i] // exp
        count[idx % 10] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    i = n - 1

    while i >= 0:
        idx = arr[i] // exp
        output[count[idx % 10] - 1] = arr[i]
        count[idx % 10] -= 1
        i -= 1

    for i in range(n):
        arr[i] = output[i]
