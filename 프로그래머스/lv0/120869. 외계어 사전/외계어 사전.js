function solution(spell, dic) {
    return dic.map(word => new Set(spell.map(char => word.includes(char) && word.indexOf(char) === word.lastIndexOf(char)))).filter(val => val.size === 1 && val.has(true)).length ? 1 : 2
}