def kruskal_mst(n, edges)
  mst = []
  uf  = UnionFind.new(n)
  edges.sort.each do |w, u, v|
    unless uf.connected(u, v)
      uf.union(u, v)
      mst << [w, u, v]
    end
  end

  mst
end
