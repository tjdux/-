function solution(arr)
{
    const answer = [];
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] !== arr[i+1]) answer.push(arr[i])
    }
    answer.push(arr[arr.length-1]);
    return answer;
}