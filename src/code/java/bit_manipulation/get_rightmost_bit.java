public int getRightmostSetBit(int num) {
    return num & -num;
}
