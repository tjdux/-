function solution(hp) {
    let answer = 0;
    answer += parseInt(hp / 5);
    answer += parseInt(hp%5 / 3);
    answer += parseInt(hp%5%3 / 1);
    return answer
}