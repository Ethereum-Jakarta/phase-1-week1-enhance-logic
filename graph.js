//Soal 1: Breadth-First Search (BFS)
//Judul: Shortest Path Friends


function shortestPath(friends, start, target) {
    //code
    const queue = [[start, 0]];
  
    while (queue.length > 0) {
      const [current, path] = queue.shift();
  
      if(current == target) {
        return path;
      }
  
      for(const friend of friends[current]) {
        queue.push([friend, path + 1])
      }
    }
  
    return -1;
  }

  console.log('SOAL 1 -> Shortest Path Friend:')
  
  // Testcase 1
  console.log(
    shortestPath(
      {
        Alice: ["Bob", "Charlie"],
        Bob: ["Alice", "David", "Eve"],
        Charlie: ["Alice", "Eve"],
        David: ["Bob"],
        Eve: ["Bob", "Charlie"],
      },
      "Alice",
      "David"
    )
  ); // Expected Output: 2
  
  // Testcase 2
  console.log(
    shortestPath(
      {
        Alice: ["Bob", "Charlie"],
        Bob: ["Alice", "David", "Eve"],
        Charlie: ["Alice", "Eve"],
        David: ["Bob"],
        Eve: ["Bob", "Charlie"],
      },
      "Alice",
      "Eve"
    )
  ); // Expected Output: 2
  
  // Testcase 3
  console.log(
    shortestPath(
      {
        Alice: ["Bob", "Charlie"],
        Bob: ["Alice", "David", "Eve"],
        Charlie: ["Alice", "Eve"],
        David: ["Bob"],
        Eve: ["Bob", "Charlie"],
      },
      "Alice",
      "Alice"
    )
  ); // Expected Output: 0
  
  // Testcase 4
  console.log(
    shortestPath(
      {
        Alice: ["Bob", "Charlie"],
        Bob: ["Alice", "David", "Eve"],
        Charlie: ["Alice", "Eve"],
        David: ["Bob"],
        Eve: ["Bob", "Charlie"],
      },
      "David",
      "Charlie"
    )
  ); // Expected Output: 3
  
  // Testcase 5
  console.log(
    shortestPath(
      {
        Alice: ["Bob", "Charlie"],
        Bob: ["Alice", "David", "Eve"],
        Charlie: ["Alice", "Eve"],
        David: ["Bob"],
        Eve: ["Bob", "Charlie"],
      },
      "Eve",
      "Bob"
    )
  ); // Expected Output: 1
  
  // Testcase 6
  console.log(
    shortestPath(
      {
        Alice: ["Bob", "Charlie"],
        Bob: ["Alice", "David", "Eve"],
        Charlie: ["Alice", "Eve"],
        David: ["Bob"],
        Eve: ["Bob", "Charlie"],
      },
      "Charlie",
      "Alice"
    )
  ); // Expected Output: 1
  
  // Testcase 7
  console.log(
    shortestPath(
      {
        Alice: ["Bob", "Charlie"],
        Bob: ["Alice", "David", "Eve"],
        Charlie: ["Alice", "Eve"],
        David: ["Bob"],
        Eve: ["Bob", "Charlie"],
      },
      "David",
      "Eve"
    )
  ); // Expected Output: 2





  //Soal 2: Depth-First Search (DFS)
  // Judul: Island Count

  class Graph {
    // Implementasi graph dan metode DFS
    constructor(grid) {
      this.grid = grid
    }

    DFSutil(i, j){
      if (i < 0 || i >= this.grid.length || j < 0 || j >= this.grid[i].length || this.grid[i][j] === 0)
      return;

      this.grid[i][j] = 0;

      this.DFSutil(i - 1, j);
      this.DFSutil(i + 1, j);
      this.DFSutil(i,j - 1);
      this.DFSutil(i,j + 1);
    }

    dfs() {
      let count = 0;
      for (let i = 0; i < this.grid.length; i++){
        for(let j = 0; j < this.grid[i].length; j++){
          if(this.grid[i][j] === 1) {
            this.DFSutil(i,j)
            count++
          }
        }
      }
      return count;
    }
  }

  
  function islandCount(grid) {
    // Implementasi DFS untuk menghitung jumlah pulau
    let maps = new Graph(grid);
    return maps.dfs();

  }
  
  console.log('========================')
  console.log('SOAL 2 -> ISLAND COUNT:')
  
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
 