function solution(s) {
    let numOfConversion = 0;
    let numOfZero = 0;
    
    while (s !== '1') {
        ++numOfConversion;
        const sWithoutZero = s.split('').filter(val => val !== '0').join('');
        numOfZero += s.length - sWithoutZero.length;
        s = sWithoutZero.length.toString(2)
    }
    
    return [numOfConversion, numOfZero]
}