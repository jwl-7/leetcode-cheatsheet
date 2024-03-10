from heapq import *


distances = [float('inf')] * n
distances[source] = 0
heap = [(0, source)]

while heap:
    curr_dist, node = heappop(heap)

    if curr_dist > distances[node]:
        continue

    for nei, weight in graph[node]:
        dist = curr_dist + weight

        if dist < distances[nei]:
            distances[nei] = dist
            heappush(heap, (dist, nei))
