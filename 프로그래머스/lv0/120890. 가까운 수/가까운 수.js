function solution(array, n) {
    return array.sort((a, b) => a - b).reduce((answer, cur) => answer = Math.abs(cur-n) < Math.abs(answer-n) ? cur : answer, array[0])
}