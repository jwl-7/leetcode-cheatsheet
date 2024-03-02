const fn = (graph) => {
    let stack = [START_NODE]
    let seen = new Set([START_NODE])
    let ans = 0

    while (stack.length) {
        let node = stack.pop()
        // do some logic
        for (const neighbor of graph[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor)
                stack.push(neighbor)
            }
        }
    }

    return ans
}
