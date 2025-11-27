require 'set'

def fn(graph)
  stack = [START_NODE]
  seen  = Set.new([START_NODE])
  ans   = 0

  until stack.empty?
    node = stack.pop
    # TODO: logic
    graph[node].each do |neighbor|
      unless seen.include?(neighbor)
        seen.add(neighbor)
        stack << neighbor
      end
    end
  end

  ans
end
