require 'set'

def fn(graph)
  queue = [START_NODE]
  seen  = Set.new([START_NODE])
  ans   = 0

  until queue.empty?
    node = queue.shift
    # TODO: logic
    graph[node].each do |neighbor|
      unless seen.include?(neighbor)
        seen.add(neighbor)
        queue << neighbor
      end
    end
  end

  ans
end
