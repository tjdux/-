function solution(s1, s2) {
    return [...s1, ...s2].reduce((answer, cur, i, arr) => {
        return i !== arr.lastIndexOf(cur) ? ++answer: answer;
    },0)
}