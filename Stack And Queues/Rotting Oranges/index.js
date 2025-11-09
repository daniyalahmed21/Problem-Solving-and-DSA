var orangesRotting = function (grid) {
  let rows = grid.length;
  let columns = grid[0].length;
  let fresh = 0;
  let queue = [];
  let minutes = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  let directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  while (fresh > 0 && queue.length > 0) {
    let size = queue.length;
    for (let k = 0; k < size; k++) {
      let [x, y] = queue.shift();
      for (const [dx, dy] of directions) {
        let nx = x + dx;
        let ny = y + dy;

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < rows &&
          ny < columns &&
          grid[nx][ny] === 1
        ) {
          grid[nx][ny] = 2;
          fresh--;
          queue.push([nx, ny]);
        }
      }
    }
    minutes++ ;
  }

  return fresh===0 ? minutes : -1

};

let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

console.log(orangesRotting(grid));
