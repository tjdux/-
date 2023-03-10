function solution(k, score) {
    const arr = [];
    for (let i = 0; i < score.length; i++) {
        arr.push(score.slice(0, i+1).sort((a, b) => b - a))
    }
    return arr.map((val, i) => i < k - 1 ? val[i] : val[k-1])
}