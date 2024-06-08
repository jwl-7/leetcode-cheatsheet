int get_rightmost_set_bit(int num) {
    return num & -num;
}
