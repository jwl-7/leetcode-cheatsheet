def bellman_ford(n, edges, source)
  distances         = Array.new(n, Float::INFINITY)
  distances[source] = 0

  (n - 1).times do
    edges.each do |u, v, w|
      if distances[u] != Float::INFINITY && distances[u] + w < distances[v]
        distances[v] = distances[u] + w
      end
    end
  end

  edges.each do |u, v, w|
    if distances[u] != Float::INFINITY && distances[u] + w < distances[v]
      return []
    end
  end

  distances
end
