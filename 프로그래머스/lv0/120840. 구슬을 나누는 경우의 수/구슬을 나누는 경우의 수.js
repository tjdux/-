function solution(balls, share) {
    return factorial(balls) / (factorial(balls-share) * factorial(share))
}

function factorial(n) {
    return n ? BigInt(n) * BigInt(factorial(n-1)) : BigInt(1)
}