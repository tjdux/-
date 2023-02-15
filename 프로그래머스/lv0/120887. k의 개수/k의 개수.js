function solution(i, j, k) {
    return Array.from({length: j - i + 1}, (_, index) => String(i + index)).filter(x => x.includes(`${k}`)).join('').split('').filter(x => x=== `${k}`).length
}