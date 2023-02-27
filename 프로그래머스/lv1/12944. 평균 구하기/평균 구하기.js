function solution(arr) {
    return arr.reduce((answer, val) => answer += val, 0) / arr.length
}