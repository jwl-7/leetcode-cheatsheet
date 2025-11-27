def fn(arr)
  if BASE_CASE
    return 0
  end

  dp = Array.new(STATE_FOR_WHOLE_INPUT + 1, BASE_CASE)

  (SMALLEST_SUBPROBLEM..STATE_FOR_WHOLE_INPUT).each do |state|
    if BASE_CASE
      dp[state] = BASE_CASE
    else
      dp[state] = RECURRENCE_RELATION(state)
    end
  end

  dp[STATE_FOR_WHOLE_INPUT]
end
