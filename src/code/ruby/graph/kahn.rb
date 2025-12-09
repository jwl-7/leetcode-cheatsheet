def kahn_topological_sort(graph)
  result    = []
  indegree  = Hash.new(0)

  graph.each_value do |vertices|
    vertices.each do |v|
      indegree[v] += 1
    end
  end

  queue = graph.keys.select { |node| indegree[node] == 0 }

  until queue.empty?
    node = queue.shift
    result << node

    graph[node].each do |neighbor|
      indegree[neighbor] -= 1
      queue << neighbor if indegree[neighbor] == 0
    end
  end

  result.size == graph.size ? result : []
end
