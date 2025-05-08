


function shortestPath(friends, start, target) {
    //code
    let step = 0
    if(target==start){
      return step
    }
    let queue = [step]
    let indikator = true
    for (let f of friends[start]){
      queue.push(f)
    }
    // console.log(queue)
    let visited = []
    // console.log(visited.indexOf(queue[0]))
    while(queue.length>0){
      let shifted = queue.shift()
      if(shifted>-1){
        step++
        indikator = true
      } else if(visited.indexOf(shifted)==-1){
        if(shifted==target){
          return step
        } else {
          if(indikator){
            queue.push(step)
            indikator = false
          }
          for(let s of friends[shifted]){
            queue.push(s)
          }
          visited.push(shifted)
        }
      }
      // console.log(shifted,"shifted")
      // console.log(queue,"queue")
      // console.log(visited,"visited")
      // console.log(step,"step")
    }
    return -1
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


    console.log("Soal DSF")



    class Graph {
      // Implementasi graph dan metode DFS
    }
    
    function islandCount(grid) {
      // Implementasi DFS untuk menghitung jumlah pulau
      let antri = []
      let pulau = 0
      for(let a=0;a<grid.length;a++){
        for(let b=0;b<grid[a].length;b++){
          if(grid[a][b]==1){
            antri.push([a,b])
            while(antri.length>0){
              let popped = antri.pop()
              // console.log(popped, "popped")
              // console.log(grid.length, "popped[0]")
              
              if(popped[0]>0){
                if(grid[popped[0]-1][popped[1]]==1){
                  antri.push([popped[0]-1,popped[1]])
                }
              } 
              if(popped[1]>0){
                if(grid[popped[0]][popped[1]-1]==1){
                  antri.push([popped[0],popped[1]-1])
                }
              }
              if(popped[0]<grid.length-1){
                if(grid[popped[0]+1][popped[1]]==1){
                  antri.push([popped[0]+1,popped[1]])
                }
              }
              if(popped[1]<grid[a].length-1){
                if(grid[popped[0]][popped[1]+1]==1){
                  antri.push([popped[0],popped[1]+1])
                }
              }

            grid[popped[0]][popped[1]] = 0
            // console.log(grid,"grid")
            // console.log(antri,"antri")
          }
          pulau ++
          // console.log(pulau,"pulau")
          }

        }
      }
      return pulau
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