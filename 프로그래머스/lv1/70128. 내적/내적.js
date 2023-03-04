function solution(a, b) {
    return a.reduce((answer, val, i) => answer + val * b[i], 0)
}