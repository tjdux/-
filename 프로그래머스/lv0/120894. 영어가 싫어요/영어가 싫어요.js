function solution(numbers) {
    const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    nums.forEach((val, i) => numbers = numbers.split(val).join(i))
    return Number(numbers)
}