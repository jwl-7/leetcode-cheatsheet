class Graph
  attr_accessor :graph

  def initialize
    @graph = {}
  end

  def add_vertex(vertex)
    @graph[vertex] ||= []
  end

  def add_edge(a, b)
    add_vertex(a)
    add_vertex(b)
    @graph[a] << b
    @graph[b] << a
  end

  def get_neighbors(vertex)
    @graph.fetch(vertex, [])
  end

  def to_s
    output = ''
    @graph.each do |vertex, neighbors|
      output += "#{vertex} - #{neighbors.join(' - ')}\n"
    end
    output
  end
end
