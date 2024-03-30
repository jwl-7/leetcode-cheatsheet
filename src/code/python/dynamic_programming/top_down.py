def fn(arr):
    @cache
    def dp(STATE):
        if BASE_CASE:
            return 0
        return RECURRENCE_RELATION(STATE)

    return dp(STATE_FOR_WHOLE_INPUT)
