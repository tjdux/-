function solution(my_string) {
    return [...my_string].filter(char => isFinite(char)).map(val => Number(val)).sort();
}