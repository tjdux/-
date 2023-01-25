function solution(age) {
    const alphabet = 'abcdefghij';
    return String(age).split('').map(i => alphabet[Number(i)]).join('')
}