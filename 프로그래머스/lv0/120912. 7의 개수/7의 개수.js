function solution(array) {
    return array.reduce((answer, val) => answer += String(val).split(7).length-1, 0)
}