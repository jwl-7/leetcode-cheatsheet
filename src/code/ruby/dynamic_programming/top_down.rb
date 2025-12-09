def fn(arr)
  cache = {}

  dp = lambda do |state|
    return 0 if BASE_CASE
    return cache[state] if cache.key?(state)

    cache[state] = RECURRENCE_RELATION(state)
  end

  dp.call(STATE_FOR_WHOLE_INPUT)
end
