function solution(n) {
    return Array.from({length: n}, (_, i) => i+1).filter(val => {
        for (let i = 2; i < val; i++) {
            if (val % i === 0) return true
        }
        return false
    }).length
}