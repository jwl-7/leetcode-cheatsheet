from heapq import *


distances = [float('inf')] * n
distances[source] = 0
heap = [(0, source)]

while heap:
    curr_dist, node = heappop(heap)

    if curr_dist > distances[node]:
        continue

    for neighbor, weight in graph[node]:
        dist = curr_dist + weight

        if dist < distances[neighbor]:
            distances[neighbor] = dist
            heappush(heap, (dist, neighbor))
