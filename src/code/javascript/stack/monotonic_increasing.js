const fn = (arr) => {
    let stack = []
    let ans = 0

    for (const num of arr) {
        // for monotonic decreasing, just flip the > to <
        while (stack.length && stack[stack.length - 1] > num) {
            // do logic
            stack.pop()
        }

        stack.push(num)
    }

    return ans
}
