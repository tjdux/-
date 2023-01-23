function solution(my_string, n) {
    const answer = [];
    for (const char of my_string) {
        answer.push(char.repeat(n))
    }
    return answer.join('')
}