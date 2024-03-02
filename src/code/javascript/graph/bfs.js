const fn = (graph) => {
    let queue = [START_NODE]
    let seen = new Set([START_NODE])
    let ans = 0

    while (queue.length) {
        let currentLength = queue.length
        let nextQueue = []

        for (let i = 0; i < currentLength; i++) {
            let node = queue[i]
            // do some logic
            for (const neighbor of graph[node]) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor)
                    nextQueue.push(neighbor)
                }
            }
        }

        queue = nextQueue
    }

    return ans
}
