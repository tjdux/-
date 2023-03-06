function solution(n) {
    const trinary = [];
    while (n >= 3) {
        trinary.unshift(n%3);
        n = parseInt(n / 3);
    }
    trinary.unshift(n);
    return trinary.reduce((answer, val, i) => answer + val * 3 ** i,0)
}