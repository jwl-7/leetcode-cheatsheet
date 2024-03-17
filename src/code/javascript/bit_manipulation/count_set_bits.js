const countSetBits = (num) => {
    return num.toString(2).split('1').length - 1
}
