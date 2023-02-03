function solution(quiz) {
    const expressions = quiz.map(exp => exp.split(' '));
    return expressions.map(exp => {
        const [x, operator, y, equal, result] = exp;
        const answer = operator === '+' ? Number(x) + Number(y) : Number(x) - Number(y);
        return answer === Number(result) ? 'O' : 'X'
    })
}