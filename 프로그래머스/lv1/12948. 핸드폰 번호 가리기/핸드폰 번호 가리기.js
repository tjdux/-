function solution(phone_number) {
    return phone_number.split('').map((val, i, arr) => i > arr.length - 5 ? val : '*').join('')
}