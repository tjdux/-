function solution(dot) {
    const x = dot[0] > 0 ? 1 : 0;
    const y = dot[1] > 0 ? 1 : 0;
    
    if (x) {
       return y ?  1 : 4
    } else {
       return y?  2 : 3
    }
}