function solution(n) {
    return Number(String(n).split('').map(val => Number(val)).sort((a, b) => b - a).join(''))
}