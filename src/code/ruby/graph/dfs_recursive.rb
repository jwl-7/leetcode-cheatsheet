require 'set'

def fn(graph)
  seen = Set.new([START_NODE])

  dfs = lambda do |node|
    ans = 0
    # TODO: logic
    graph[node].each do |neighbor|
      unless seen.include?(neighbor)
        seen.add(neighbor)
        ans += dfs.call(neighbor)
      end
    end
    ans
  end

  dfs.call(START_NODE)
end
