function solution(absolutes, signs) {
    return absolutes.reduce((answer, val, i) => signs[i] ? answer + val : answer - val, 0)
}