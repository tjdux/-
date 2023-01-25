function solution(emergency) {
    const rank = Object.assign({}, emergency.slice().sort((a, b) => b - a))
    
    return emergency.map(val => Number(Object.keys(rank).find(key => rank[key] === val))+1);
}