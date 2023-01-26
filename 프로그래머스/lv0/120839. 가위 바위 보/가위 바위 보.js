function solution(rsp) {
    const vals = [2, 0, 5];
    return rsp.split('').reduce((acc,cur) => acc+ (cur === '5' ? 2 : vals[vals.indexOf(Number(cur)) + 1]), '');
}