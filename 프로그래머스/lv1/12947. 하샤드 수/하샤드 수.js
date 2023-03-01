function solution(x) {
    const sum = String(x).split('').map(val => Number(val)).reduce((acc, val) => acc + val, 0);
    return x % sum === 0;
}