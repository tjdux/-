function solution(s) {
    return s.split(' ').filter((val, i, arr) => val !== 'Z' && arr[i+1] !== 'Z').reduce((acc, cur) => acc + Number(cur), 0)
}