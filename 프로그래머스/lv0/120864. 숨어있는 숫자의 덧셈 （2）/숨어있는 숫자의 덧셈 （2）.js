function solution(my_string) {
    return my_string.split(/[a-z]/i).map(val => Number(val)).reduce((answer, val) => answer += val, 0)
}