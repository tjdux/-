function solution(money) {
    const numberOfCup = Math.floor(money / 5500);
    const change = money - numberOfCup * 5500;
    return [numberOfCup, change]
}