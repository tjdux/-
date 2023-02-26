function solution(A, B) {
    const aChars = A.split('');
    const bChars = B.split('');
    let answer = 0;
    
    while (JSON.stringify(aChars) !== JSON.stringify(bChars)) {
        aChars.unshift(aChars.pop());
        ++answer;
        if (answer === A.length) {
            return -1;
        }
    }
    return answer;
}