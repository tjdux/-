function solution(sides) {
    return 2 * Math.max(...sides) < sides.reduce((acc, cur) => acc + cur, 0) ? 1 : 2;
}