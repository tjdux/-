function solution(s) {
 let answer = s;
  const nums = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  for (const word in nums) {
      answer = answer.replace(new RegExp(word, 'g'), nums[word])
  };
    return Number(answer)
}