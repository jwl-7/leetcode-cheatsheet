def fn(head)
  prev = nil
  curr = head

  until curr.nil?
    nxt = curr.next
    curr.next = prev
    prev = curr
    curr = nxt
  end

  prev
end
