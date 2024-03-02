def fn(arr):
    if BASE_CASE:
        return 0

    dp = [BASE_CASE] * (STATE_FOR_WHOLE_INPUT + 1)

    for STATE in range(SMALLEST_SUBPROBLEM, STATE_FOR_WHOLE_INPUT + 1):
        if BASE_CASE:
            dp[STATE] = BASE_CASE
        else:
            dp[STATE] = RECURRENCE_RELATION(STATE)

    return dp[STATE_FOR_WHOLE_INPUT]
