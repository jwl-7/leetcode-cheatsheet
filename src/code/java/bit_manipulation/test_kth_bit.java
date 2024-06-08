public boolean testKthBit(int num, int k) {
    return (num & (1 << k)) != 0;
}
