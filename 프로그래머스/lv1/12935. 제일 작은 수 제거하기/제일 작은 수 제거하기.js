function solution(arr) {
    return new Set(arr).size === 1 ? [-1] : arr.filter(val => val !== Math.min(...arr))
}