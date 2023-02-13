function solution(dots) {
    const width = Math.max(...dots.map(dot => dot[0])) - Math.min(...dots.map(dot => dot[0]))
    const height = Math.max(...dots.map(dot => dot[1])) - Math.min(...dots.map(dot => dot[1]))
    
    return width * height
}