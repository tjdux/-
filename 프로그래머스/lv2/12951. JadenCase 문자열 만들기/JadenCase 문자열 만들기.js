function solution(s) {
     return s
    .toLowerCase()
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((char, i) => (i === 0 ? char.toUpperCase() : char))
        .join('')
    )
    .join(' ');
}