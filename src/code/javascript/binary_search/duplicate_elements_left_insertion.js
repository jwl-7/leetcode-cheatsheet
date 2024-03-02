const fn = (arr, target) => {
    let left = 0
    let right = arr.length

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] >= target) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}
