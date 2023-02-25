function solution(common) {
    const difference = common.map((val, i, arr) => arr[i+1] - val);
    difference.pop();
    return new Set(difference).size === 1 ? common.pop() + difference[0] : common.pop() * (difference[1]/difference[0])
}