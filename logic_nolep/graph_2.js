class Graph {
    // Implementasi graph dan metode DFS
    constructor(grid){
        this.grid = grid;
        this.vertexs = {};

        const rows = grid.length;
        const columns = grid[0].length;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                if (grid[r][c] === 1) {
                    const vertex = `${r},${c}`;
                    this.addNode(vertex);
                    
                    if (r > 0 && grid[r - 1][c] === 1) {
                        const otherVertex = `${r - 1},${c}`;
                        this.addEdge(vertex, otherVertex);
                    }
                    if (c > 0 && grid[r][c - 1] === 1) {
                        const otherVertex = `${r},${c - 1}`;
                        this.addEdge(vertex, otherVertex);
                    }
                }
            }
        }
    }




    addNode(value){
        this.vertexs[value] = []
    }

    addEdge(source, destination){
        if(!this.vertexs[source] || !this.vertexs[destination]){
            throw new Error('source or destination vertex does not exist.');
        }
        const sourceVertex = this.vertexs[source];
        const destinationVertex = this.vertexs[destination];
        sourceVertex.push(destination);
        destinationVertex.push(source);
    }

    dfs(vertex, visited){
        if(visited.indexOf(vertex) > 0){
            return;
        }
        visited.push(vertex);
        for(let adjacent of this.vertexs[vertex]){
            this.dfs(adjacent, visited);
        }
    }
  }
  
  function islandCount(grid) {
    // Implementasi DFS untuk menghitung jumlah pulau
    const graph = new Graph(grid);
    let count = 0;
    const visited = [];

    for (let vertex in graph.vertexs){
        if(visited.indexOf(vertex) === -1){
            count++;
            graph.dfs(vertex, visited);
        }
    }

    return count;
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