function shortestPathDijkstraArray(graph, start, target) {
    // code
    let antri = []
    const INF = Number.MAX_SAFE_INTEGER
    let distance = INF
    let visited = [start]
    // console.log(distance)
    for(let g=0;g<graph[start].length;g++){
        if(graph[start][g]>0){
            if(g==target&&distance>graph[start][g]){
                distance = graph[start][g]
            }
            antri.push([g,graph[start][g]])
        }
    }
    // console.log(antri,"antri")
    while(antri.length>0){
        antri.sort((a, b) => a[1] - b[1])
        shifted = antri.shift()
        // console.log(shifted,"shifted")
        // console.log(antri,"antri")
        // console.log(visited.indexOf(shifted[0]))
        if(visited.indexOf(shifted[0]) <0){
            for(let g=0;g<graph[shifted[0]].length;g++){
                if(graph[shifted[0]][g]>0){
                    // console.log(distance>graph[shifted[0]][g])
                    if(g==target&&distance>graph[shifted[0]][g]+shifted[1]){
                        distance = graph[shifted[0]][g]+shifted[1]
                    }
                    antri.push([g,graph[shifted[0]][g]+shifted[1]])
                }
            }
            visited.push(shifted[0])
        }
        
        // console.log(distance,"distance")
    }
    return distance !== INF ? distance : -1;
  }
//   [
//     [-1, 2, -1, -1, -1],
//     [2, -1, 1, -1, 3],
//     [-1, 1, -1, 4, -1],
//     [-1, -1, 4, -1, 2],
//     [-1, 3, -1, 2, -1]
//   ],
//   0,
//   4
  
  // Testcase 1
  console.log(shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1]
    ],
    0,
    2
  )); // Expected Output: 4
  
  // Testcase 2
  console.log(shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1]
    ],
    0,
    4
  )); // Expected Output: 6
  
  // Testcase 3
  console.log(shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1]
    ],
    1,
    3
  )); // Expected Output: 1
  
  // Testcase 4
  console.log(shortestPathDijkstraArray(
    [
      [-1, 2, -1, -1, -1],
      [2, -1, 1, -1, 3],
      [-1, 1, -1, 4, -1],
      [-1, -1, 4, -1, 2],
      [-1, 3, -1, 2, -1]
    ],
    0,
    4
  )); // Expected Output: 5
  
  // Testcase 5
  console.log(shortestPathDijkstraArray(
    [
      [-1, 1, 2, -1],
      [1, -1, -1, 3],
      [2, -1, -1, -1],
      [-1, 3, -1, -1]
    ],
    0,
    3
  )); // Expected Output: 4