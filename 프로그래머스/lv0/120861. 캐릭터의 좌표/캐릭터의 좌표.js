function solution(keyinput, board) {
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    
    return keyinput.reduce((coordinate, key) => {
        if (key === 'up' || key === 'down') {
            key === 'up' ? ++coordinate[1] : --coordinate[1]
            if (Math.abs(coordinate[1]) > maxY) {
                coordinate[1] = coordinate[1] > 0 ? maxY : -maxY
            }
        } else {
            key === 'right' ? ++coordinate[0] : --coordinate[0]
            if (Math.abs(coordinate[0]) > maxX) {
                coordinate[0] = coordinate[0] > 0 ? maxX : -maxX
            }
        }
        return coordinate
    }, [0, 0])
}