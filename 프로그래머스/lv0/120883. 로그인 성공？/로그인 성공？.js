function solution(id_pw, db) {
    let answer = '';
    db.forEach(val => {
        if (id_pw[0] === val[0]) {
            return answer = id_pw[1] === val[1] ? 'login' : 'wrong pw';
        }
    })
    
    return answer ? answer : 'fail';
}