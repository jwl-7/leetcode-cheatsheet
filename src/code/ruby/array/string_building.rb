def fn(strs)
  # array of strings/chrs
  ans = []

  strs.each do |char|
    ans << char
  end

  ans.join('')
end

# simple
def fn2(strs)
  strs.join
end
