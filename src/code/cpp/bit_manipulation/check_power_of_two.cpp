bool is_power_of_two(int num) {
    return (num & (num - 1)) == 0;
}
