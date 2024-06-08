import java.util.Arrays;


public int fn(int[] arr) {
    if (BASE_CASE) {
        return 0;
    }

    int[] dp = new int[STATE_FOR_WHOLE_INPUT + 1];
    Arrays.fill(dp, BASE_CASE);

    for (int STATE = SMALLEST_SUBPROBLEM; STATE <= STATE_FOR_WHOLE_INPUT; STATE++) {
        if (BASE_CASE) {
            dp[STATE] = BASE_CASE;
        } else {
            dp[STATE] = RECURRENCE_RELATION(STATE);
        }
    }

    return dp[STATE_FOR_WHOLE_INPUT];
}
