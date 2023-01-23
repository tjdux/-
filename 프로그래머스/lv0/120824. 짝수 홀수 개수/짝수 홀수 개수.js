function solution(num_list) {
    let evenNum = 0, oddNum = 0;
    for (const num of num_list) {
        num % 2 === 0 ? evenNum++ : oddNum++
    }
    return [evenNum, oddNum];
}