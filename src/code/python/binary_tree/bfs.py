from collections import deque


def fn(root):
    queue = deque([root])
    ans = 0

    while queue:
        current_length = len(queue)
        # TODO: logic for current level

        for _ in range(current_length):
            node = queue.popleft()
            # TODO: logic
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

    return ans
