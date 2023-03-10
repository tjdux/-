function solution(s) {
    return s.split('').map((char, index, arr) => {
        for (let i = index - 1; i >= 0; --i) {
            if (arr[i] === char) return index - i;
        }
    }).map(val => val === undefined ? -1 : val)
}