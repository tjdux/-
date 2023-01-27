function solution(numbers, k) {
    let answer = 0;
    for (let i = 1; i < k; i++) {
        answer += 2;
        if (answer > numbers.length - 1) {
            answer -= numbers.length
        }
    }
    return numbers[answer];
}