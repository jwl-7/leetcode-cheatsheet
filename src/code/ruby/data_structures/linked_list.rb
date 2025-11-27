class ListNode
  attr_accessor :data, :next

  def initialize(data)
    @data = data
    @next = nil
  end

  def to_s
    "[#{@data}]"
  end
end

class LinkedList
  attr_accessor :head

  def initialize
    @head = nil
  end

  def append(data)
    if @head.nil?
      @head = ListNode.new(data)
      return
    end

    curr = @head
    curr = curr.next while curr.next
    curr.next = ListNode.new(data)
  end

  def delete(data)
    return if @head.nil?

    if @head.data == data
      @head = @head.next
      return
    end

    prev = nil
    curr = @head

    while curr
      if curr.data == data
        prev.next = curr.next
        return
      end
      prev = curr
      curr = curr.next
    end
  end

  def reverse
    prev = nil
    curr = @head

    while curr
      nxt = curr.next
      curr.next = prev
      prev = curr
      curr = nxt
    end

    @head = prev
  end

  def to_s
    return 'nil' if @head.nil?

    nodes = []
    curr = @head
    while curr
      nodes << curr.to_s
      curr = curr.next
    end

    nodes.join(' -> ') + ' -> nil'
  end
end
