function solution(s) {
    return s.length % 2 === 0 ? s.slice(s.length/2 - 1, s.length / 2 + 1) : s[Math.trunc(s.length/2)]
}