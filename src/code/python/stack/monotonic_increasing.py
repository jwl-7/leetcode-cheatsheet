def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        # for monotonic decreasing, flip > to <
        while stack and stack[-1] > num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
