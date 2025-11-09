var orangesRotting = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [];
  let fresh = 0;
  let minutes = 0;

  // Step 1: Collect all rotten oranges and count fresh ones
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  // Directions: up, down, left, right
  const directions = [
    [0, 1], [0, -1],
    [1, 0], [-1, 0]
  ];

  // Step 2: BFS traversal
  while (queue.length > 0 && fresh > 0) {
    let size = queue.length;
    for (let k = 0; k < size; k++) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        // Check bounds and if the orange is fresh
        if (
          nx >= 0 && ny >= 0 &&
          nx < rows && ny < cols &&
          grid[nx][ny] === 1
        ) {
          grid[nx][ny] = 2;
          fresh--;
          queue.push([nx, ny]);
        }
      }
    }
    minutes++;
  }

  return fresh === 0 ? minutes : -1;
};

let grid = [[2,1,1],[1,1,0],[0,1,1]]

console.log(orangesRotting(grid));