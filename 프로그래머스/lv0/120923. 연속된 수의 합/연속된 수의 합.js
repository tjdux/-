function solution(num, total) {
    const answer = [];
    for (let i = 0; i < num; i++) {
        num % 2 === 0 
            ? answer.push((total - (num - 1) * num / 2) / num + i)
            : answer.push(total/num - Math.floor(num / 2) + i) 
    }
        
    return answer
}