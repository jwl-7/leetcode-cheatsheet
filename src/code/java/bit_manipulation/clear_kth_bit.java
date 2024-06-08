public int clearKthBit(int num, int k) {
    return num & ~(1 << k);
}
