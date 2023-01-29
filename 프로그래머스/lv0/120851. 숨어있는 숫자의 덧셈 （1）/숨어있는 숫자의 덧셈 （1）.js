function solution(my_string) {
   return [...my_string].filter(char => isFinite(char)).reduce((acc, cur) => acc + Number(cur), 0)
}