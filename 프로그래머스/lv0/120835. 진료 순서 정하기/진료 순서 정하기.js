function solution(emergency) {
    const rank = emergency.slice().sort((a, b) => b - a)
    
    return emergency.map(val => rank.indexOf(val) + 1);
}