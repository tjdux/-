function solution(s) {
    const nums = s.split(' ').map(val => parseInt(val));
    return `${Math.min(...nums)} ${Math.max(...nums)}`
}