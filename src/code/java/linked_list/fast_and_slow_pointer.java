public int fn(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    int ans = 0;

    while (fast != null && fast.next != null) {
        // TODO: logic
        slow = slow.next;
        fast = fast.next.next;
    }

    return ans;
}
