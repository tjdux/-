function solution(a, b) {
    const getGCD = (n, m) => n % m === 0 ? m : getGCD(m, n % m);
    if (Number.isInteger(a/b)) {
        return 1;
    } else {
        let denominator = b / getGCD(a, b);
        while (denominator % 2 === 0) denominator /= 2;
        while (denominator % 5 === 0) denominator /= 5;
        return denominator === 1 ? 1 : 2;
    }
}