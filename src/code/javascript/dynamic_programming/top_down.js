const fn = (arr) => {
    const dp = (STATE) => {
        if (BASE_CASE) {
            return 0
        }

        if (memo[STATE] != -1) {
            return memo[STATE]
        }

        let ans = RECURRENCE_RELATION(STATE)
        memo[STATE] = ans
        return ans
    }

    let memo = ARRAY_SIZED_ACCORDING_TO_STATE
    return dp(STATE_FOR_WHOLE_INPUT)
}
