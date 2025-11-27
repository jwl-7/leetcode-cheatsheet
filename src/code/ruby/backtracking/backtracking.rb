def backtrack(curr, OTHER_ARGUMENTS...)
  if(BASE_CASE)
    # TODO: modify answer
    return
  end

  ans = 0

  INPUTS.each do |i|
    # TODO: modify current state
    ans += backtrack(curr, OTHER_ARGUMENTS...)
    # TODO: undo modification of current state
  end

  ans
end
