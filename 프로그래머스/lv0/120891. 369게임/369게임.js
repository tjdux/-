function solution(order) {
    return Array.from(String(order), Number).reduce((answer, cur) => cur !== 0 && cur % 3 === 0 ? ++answer: answer, 0)
}