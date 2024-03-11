const fn = (arr) => {
    let stack = []
    let ans = 0

    for (const num of arr) {
        // for monotonic decreasing, flip > to <
        while (stack.length && stack[stack.length - 1] > num) {
            // TODO: logic
            stack.pop()
        }

        stack.push(num)
    }

    return ans
}
