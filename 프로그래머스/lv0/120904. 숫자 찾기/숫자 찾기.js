function solution(num, k) {
    let index = [...String(num)].indexOf(String(k));
    return index !== -1 ? ++index : -1
}