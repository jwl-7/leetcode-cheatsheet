def fn(head)
  slow  = head
  fast  = head
  ans   = 0

  until fast.nil? || fast.next.nil?
    # TODO: logic
    slow = slow.next
    fast = fast.next.next
  end

  ans
end
