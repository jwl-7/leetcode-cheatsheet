const fn = (arr) => {
    const check = (x) => {
        // this function is implemented depending on the problem
        return BOOLEAN
    }

    let left = MINIMUM_POSSIBLE_ANSWER
    let right = MAXMIMUM_POSSIBLE_ANSWER

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (check(mid)) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
}
