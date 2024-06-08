public int backtrack(int curr, OTHER_ARGUMENTS...) {
    if (BASE_CASE) {
        // TODO: modify answer
        return 0;
    }

    int ans = 0;

    for (int i = 0; i < ITERATE_OVER_INPUT; i++) {
        // TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...);
        // TODO: undo modification of current state
    }

    return ans;
}
