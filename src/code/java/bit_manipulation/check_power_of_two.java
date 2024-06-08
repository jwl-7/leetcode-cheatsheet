public boolean isPowerOfTwo(int num) {
    return (num & (num - 1)) == 0;
}
