const rankingSystem = function (numCorrection) {
    return 6 - numCorrection + 1 < 6 ? 6 - numCorrection + 1 : 6
}

function solution(lottos, win_nums) {
    const highestRank = rankingSystem(
        lottos.filter(val => win_nums.includes(val) || val === 0).length
    )
    const lowestRank = rankingSystem(
        lottos.filter(val => win_nums.includes(val)).length
    )
        
    return [highestRank, lowestRank]
}