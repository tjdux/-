function solution(before, after) {
    return before.split('').filter(char => 
        before.split('').filter(x => x === char).length === after.split('').filter(x => x === char).length
    ).toString() === before.split('').toString() ? 1 : 0
}