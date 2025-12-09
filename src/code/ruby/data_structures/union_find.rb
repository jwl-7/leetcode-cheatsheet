class UnionFind
  attr_accessor :root

  def initialize(n)
    @root = Array.new(n) { |i| i }
  end

  def find(a)
    return a if a == @root[a]

    @root[a] = find(@root[a])
  end

  def union(a, b)
    @root[find(a)] = find(b)
  end

  def connected(a, b)
    find(a) == find(b)
  end

  def to_s
    n = @root.size
    components = Hash.new { |h, k| h[k] = [] }

    (0...n).each do |i|
      root_i = find(i)
      components[root_i] << i
    end

    components.values.map { |comp| comp.map { |node| "(#{node})" }.join(' - ') }.join("\n")
  end
end
