function solution(cipher, code) {
    return cipher.split('').reduce((answer, cur, i) => (i+1)%code === 0 ? answer += cur : answer, '');
}