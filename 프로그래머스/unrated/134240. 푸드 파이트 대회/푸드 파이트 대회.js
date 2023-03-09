function solution(food) {
    let answer = '';
    const foodPerPerson = food.map(val => val % 2 === 0 ? val / 2 : (val-1) / 2);
    for (let i = 1; i < foodPerPerson.length; i++) {
        answer += `${`${i}`.repeat(foodPerPerson[i])}`
    }
    return answer + '0' + answer.split('').reverse().join('')
}