const fn = (head) => {
    let curr = head
    let prev = null

    while (curr) {
        let nextNode = curr.next
        curr.next = prev
        prev = curr
        curr = nextNode
    }

    return prev
}
