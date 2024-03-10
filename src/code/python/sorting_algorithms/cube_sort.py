def cube_sort(arr: list, processors: int) -> None:
    n = len(arr)
    subarrays = []
    subarray_size = n // processors

    for i in range(processors):
        subarray = arr[i * subarray_size : (i + 1) * subarray_size]
        subarrays.append(subarray)

    for subarray in subarrays:
        subarray.sort()

    for dimension in range(processors.bit_length() - 1):
        for i in range(processors):
            partner = i ^ (1 << dimension)
            if i < partner:
                merged = subarrays[i] + subarrays[partner]
            else:
                merged = subarrays[partner] + subarrays[i]
            merged.sort()
            subarrays[i] = merged[:subarray_size]
            subarrays[partner] = merged[subarray_size:]

    arr[:] = [num for subarray in subarrays for num in subarray]
