function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    return A.reduce((answer, val, i) => answer + val * B[i], 0)
}