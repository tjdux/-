function solution(N, stages) {
    const arr = [];
  for (let i = 1; i <= N; i++) {
    const percentage =
      stages.filter(val => val === i).length /
      stages.filter(val => val > i).length;
    arr.push([i, percentage]);
  }
  return arr.sort((a, b) => b[1] - a[1]).map(val => val[0]);
}