function solution(n) {
    let num = 1;
    let answer = 0;
    
    while (num <= n) {
        if (n % num === 0) {
            answer++;
        }
        num++;
    }
    
    return answer
}