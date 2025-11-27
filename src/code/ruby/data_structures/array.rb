
class Array
  def initialize(size)
    @size = size
    @data = Array.new(size)
  end

  def [](index)
    @data[index]
  end

  def []=(index, value)
    @data[index] = value
  end

  def length
    @data.length
  end

  def to_s
    @data.to_s
  end
end
