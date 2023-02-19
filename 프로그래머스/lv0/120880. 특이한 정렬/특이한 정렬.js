function solution(numlist, n) {
    return numlist.map(val => [val, Math.abs(n - val)]).sort((a, b) => a[1] - b[1]).sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0]
        }
    }).map(val => val[0])
}