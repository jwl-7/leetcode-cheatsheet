const fn = (head) => {
    let ans = 0
    let slow = head
    let fast = head

    while (fast && fast.next) {
        // do logic
        slow = slow.next
        fast = fast.next.next
    }

    return ans
}
