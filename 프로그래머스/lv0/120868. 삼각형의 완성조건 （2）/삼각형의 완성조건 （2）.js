function solution(sides) {
    return sides.reduce((acc, val) => acc += val, 0) - (Math.max(...sides) - Math.min(...sides)) - 1
}