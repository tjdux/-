function solution(n)
{
    return String(n).split('').reduce((answer, val) => answer += Number(val),0)
}