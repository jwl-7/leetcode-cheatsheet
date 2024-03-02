const fn = (arr) => {
    const dp = new Array(STATE_FOR_WHOLE_INPUT + 1).fill(BASE_CASE)

    for (let state = SMALLEST_SUBPROBLEM; state <= STATE_FOR_WHOLE_INPUT; state++) {
        if (BASE_CASE) {
            dp[state] = BASE_CASE
        } else {
            dp[state] = RECURRENCE_RELATION(state)
        }
    }

    return dp[STATE_FOR_WHOLE_INPUT]
}
