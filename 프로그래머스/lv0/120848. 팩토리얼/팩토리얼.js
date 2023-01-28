function solution(n) {
    let answer = 1;
    while (answer) {
        if (factorial(answer) > n) {
            return answer-1
        }
        answer++;
    }
}

function factorial(num) {
    return num === 0 ? 1 : num * factorial(num-1);
}