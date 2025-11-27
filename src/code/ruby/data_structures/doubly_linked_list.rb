class ListNode
  attr_accessor :data, :prev, :next

  def initialize(data)
    @data = data
    @prev = nil
    @next = nil
  end

  def to_s
    "[#{@data}]"
  end
end

class DoublyLinkedList
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

    new_node = ListNode.new(data)
    curr.next = new_node
    new_node.prev = curr
  end

  def delete(data)
    return if @head.nil?

    if @head.data == data
      @head = @head.next
      @head.prev = nil if @head
      return
    end

    curr = @head
    while curr
      if curr.data == data
        prev_node = curr.prev
        prev_node.next = curr.next
        curr.next.prev = prev_node if curr.next
        return
      end
      curr = curr.next
    end
  end

  def reverse
    curr = @head
    prev = nil

    while curr
      nxt = curr.next
      curr.next = prev
      curr.prev = nxt
      prev = curr
      curr = nxt
    end

    @head = prev
  end

  def to_s
    return 'None' if @head.nil?

    nodes = []
    curr = @head
    while curr
      nodes << curr.to_s
      curr = curr.next
    end

    nodes.join(' <-> ') + ' <-> None'
  end
end
