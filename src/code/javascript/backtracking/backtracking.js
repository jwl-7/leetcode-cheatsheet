const backtrack = (curr, OTHER_ARGUMENTS...) => {
    if (BASE_CASE) {
        // modify the answer
        return
    }

    let ans = 0

    for (ITERATE_OVER_INPUT) {
        // modify the current state
        ans += backtrack(curr, OTHER_ARGUMENTS...)
        // undo the modification of the current state
    }

    return ans
}
