bool test_kth_bit(int num, int k) {
    return (num & (1 << k)) != 0;
}
