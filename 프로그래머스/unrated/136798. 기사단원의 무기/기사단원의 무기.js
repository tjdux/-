function solution(number, limit, power) {
    const numberOfDivisors = [];
    let countDivisors = 0;
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j * j <= i; j++) {
            if (j * j === i) ++countDivisors;
            else if (i % j === 0) countDivisors += 2;
        }
        numberOfDivisors.push(countDivisors);
        countDivisors = 0;
    }
    if (numberOfDivisors.every(val => val <= limit)) {
        return numberOfDivisors.reduce((answer, val) => answer + val, 0);
    } else {
        return numberOfDivisors.reduce((answer, val) => val <= limit ? answer + val : answer + power ,0)
    }
}