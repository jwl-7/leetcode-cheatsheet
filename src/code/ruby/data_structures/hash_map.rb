class HashMap
  def initialize
    @size   = 100_000
    @bucket = Array.new(@size)
  end

  def hash_key(key)
    key.hash % @size
  end

  def []=(key, value)
    @bucket[hash_key(key)] = value
  end

  def [](key)
    @bucket[hash_key(key)]
  end

  def delete(key)
    @bucket[hash_key(key)] = nil
  end
end
