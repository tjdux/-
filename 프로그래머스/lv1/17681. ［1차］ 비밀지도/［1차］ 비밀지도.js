function solution(n, arr1, arr2) {
    const arr1Map = arr1.map(val => val.toString(2).padStart(n, '0'));
    const arr2Map = arr2.map(val => val.toString(2).padStart(n, '0'));
    
    return arr1Map.map((row, index) => row.split('').map((box, i) => box === '1' || arr2Map[index][i] === '1' ? '#' : ' ').join(''))
}