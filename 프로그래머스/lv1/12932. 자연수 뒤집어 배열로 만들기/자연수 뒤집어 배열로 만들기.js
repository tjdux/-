function solution(n) {
    return String(n).split('').reverse().map(val => Number(val))
}