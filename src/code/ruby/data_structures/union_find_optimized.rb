class UnionFind
  attr_accessor :root, :rank

  def initialize(n)
    @root = Array.new(n) { |i| i }
    @rank = Array.new(n, 1)
  end

  def find(a)
    return a if a == @root[a]

    @root[a] = find(@root[a])
  end

  def union(a, b)
    root_a = find(a)
    root_b = find(b)

    return if root_a == root_b

    if @rank[root_a] < @rank[root_b]
      @root[root_a] = root_b
    elsif @rank[root_a] > @rank[root_b]
      @root[root_b] = root_a
    else
      @root[root_b] = root_a
      @rank[root_a] += 1
    end
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
