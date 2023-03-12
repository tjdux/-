function solution(s) {
    const arr = s.toLowerCase().split('');
    let charIndex = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ' ') {
            arr[i] = charIndex % 2 === 0 ? arr[i].toUpperCase() : arr[i];
            ++charIndex;
        } else {
            charIndex = 0;
        }
    }
    
    return arr.join('')
}