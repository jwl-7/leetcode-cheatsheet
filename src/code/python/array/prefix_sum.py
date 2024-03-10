def fn(arr):
    n = len(arr)
    prefix = [arr[0]]

    for i in range(1, n):
        prefix.append(prefix[-1] + arr[i])

    return prefix
