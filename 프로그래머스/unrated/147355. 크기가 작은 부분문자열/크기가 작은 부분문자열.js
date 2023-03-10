function solution(t, p) {
    const arr = [];
    for (let i = 0; i < t.length - p.length + 1; i++){
        arr.push(Number(t.slice(i, i+p.length)))
    }
    return arr.filter(val => val <= Number(p)).length;
}