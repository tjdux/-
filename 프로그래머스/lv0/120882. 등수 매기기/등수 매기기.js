function solution(score) {
    const average = score.map(val => (val[0] + val[1]) / 2);
    const sortedAvg = average.slice().sort((a, b) => b - a)
    
    const rank = {};
    sortedAvg.forEach((val, i) => {
        if (!Object.values(rank).includes(val)) {
            rank[i+1] = val
        }
    })
    
    return average.map(val => Number(Object.keys(rank).find(key => rank[key] === val)))
}