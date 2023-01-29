function solution(n) {
    const answer = [];
    let prime = 2;
    
    while (n !== 1) {
        if (n % prime === 0) {
            answer.push(prime);
            n /= prime
        } else {
            prime ++;
        }
    }
    
    return [...new Set(answer)].sort((a, b) => a - b)
}