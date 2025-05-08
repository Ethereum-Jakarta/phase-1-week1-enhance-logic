
// Soal 1: Breadth-First Search (BFS)

function shortestPath(friends, start, target) {
    //code

    if(start === target){
        return 0
    }


    const queue = [start]
    const visited = new Set()
    const step = new Map()

    step.set(start, 0)

    while(queue.length > 0){
        const current = queue.shift()
        const destinations = friends[current]
        
        for(const destination of destinations){
            if(destination === target){
                return step.get(current) + 1
            }

            if(!visited.has(destination)){
                visited.add(destination)
                queue.push(destination)
                step.set(destination, step.get(current) + 1)
            }
        }

    }

    return 0
  }
  
  // Testcase 1
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'David')); // Expected Output: 2
    
    // Testcase 2
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'Eve')); // Expected Output: 2
    
    // Testcase 3
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'Alice')); // Expected Output: 0
    
    // Testcase 4
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'David', 'Charlie')); // Expected Output: 3
    
    // Testcase 5
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Eve', 'Bob')); // Expected Output: 1
    
    // Testcase 6
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Charlie', 'Alice')); // Expected Output: 1
    
    // Testcase 7
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'David', 'Eve')); // Expected Output: 2





      
    // Soal 2: Depth-First Search (DFS)
    

    class Graph {
        constructor(rows, cols, grid){
            this.rows = rows
            this.cols = cols
            this.grid = grid
            this.visited = Array.from({length : rows}, () => Array(cols).fill(false))
        }
    
        isValid(row, col){
            return row >= 0 && row < this.rows && col >= 0 && col < this.cols
        }
        dfs(row, col){
            this.visited[row][col] = true
            const directions = [
                [-1, 0], // atas
                [1, 0],  // bawah
                [0, -1], // kiri
                [0, 1]   // kanan
              ]
        
              for(const [index0, index1] of directions){
                const newRow = index0 + row
                const newCol = index1 + col
                if(this.isValid(newRow, newCol) && this.grid[row][col] === 1 && !this.visited[newRow][newCol]){
                    this.dfs(newRow, newCol)
                }
              }
        }
    }
      
      function islandCount(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const graph = new Graph(rows, cols, grid);
        let count = 0;
    
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
              if (grid[i][j] === 1 && !graph.visited[i][j]) {
                count++;
                graph.dfs(i, j);
              }
            }
          }
    
          return count
      }

      // Testcase 1
console.log(islandCount([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ])); // Expected Output: 1
  
  // Testcase 2
  console.log(islandCount([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
  ])); // Expected Output: 3
  
  // Testcase 3
  console.log(islandCount([
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1]
  ])); // Expected Output: 5
  
  // Testcase 4
  console.log(islandCount([
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1]
  ])); // Expected Output: 4
  
  // Testcase 5
  console.log(islandCount([
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ])); // Expected Output: 6
  
  // Testcase 6
  console.log(islandCount([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0]
  ])); // Expected Output: 2
  
  // Testcase 7
  console.log(islandCount([
    [1, 1, 1],
    [0, 0, 0],
    [1, 0, 1]
  ])); // Expected Output: 3