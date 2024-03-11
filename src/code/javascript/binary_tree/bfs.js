const fn = (root) => {
    let queue = [root]
    let ans = 0

    while (queue.length) {
        let currentLength = queue.length
        let nextQueue = []
        // TODO: logic for current level

        for (let i = 0; i < currentLength; i++) {
            let node = queue[i]
            // TODO: logic
            if (node.left) {
                nextQueue.push(node.left)
            }
            if (node.right) {
                nextQueue.push(node.right)
            }
        }

        queue = nextQueue
    }

    return ans
}
