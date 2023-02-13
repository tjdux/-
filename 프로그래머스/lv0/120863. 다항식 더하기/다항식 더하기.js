function solution(polynomial) {
    const essence = polynomial.split(' + ').filter(val => !val.includes('x')).reduce((essence, val) => essence += Number(val), 0)
    const acc = polynomial.split(' + ').filter(val => val.includes('x')).reduce((acc, val) => val === 'x' ? ++acc : acc += parseInt(val),0)
    
    if (acc === 0) {
        return `${essence}`
    }
    else if (acc === 1) {
        return essence === 0 ? `x` :`x + ${essence}` 
    } else {
        return essence === 0 ? `${acc}x` : `${acc}x + ${essence}`
    }
}