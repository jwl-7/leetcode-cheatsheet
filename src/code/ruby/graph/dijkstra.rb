require 'priority_queue'

def dijkstras(graph, source)
  n         = graph.size
  distances = Array.new(n, Float::INFINITY)

  distances[source] = 0

  heap = PriorityQueue.new
  heap[source] = 0

  until heap.empty?
    node, curr_dist = heap.delete_min
    next if curr_dist > distances[node]

    graph[node].each do |neighbor, weight|
      dist = curr_dist + weight
      if dist < distances[neighbor]
        distances[neighbor] = dist
        heap[neighbor] = dist
      end
    end
  end

  distances
end
