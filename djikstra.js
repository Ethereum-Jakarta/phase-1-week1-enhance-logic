class Djikstra {
  constructor(graph, start) {
    this.graph = graph;
    this.distance = {};
    this.distance[start] = 0;
    this.unvisited = {};
    this.unvisited[start] = true;
  }

  findDistance(start, target) {
    let listAdjacent = this.getAdjacent(this.graph[start]);
    if (listAdjacent.length == 0) {
      return;
    }
    let min;
    for (let i = 0; i < listAdjacent.length; i++) {
      this.distance[listAdjacent[i]] =
        this.distance[start] + this.graph[start][listAdjacent[i]];
      min = listAdjacent[i];
    }

    for (let i = 1; i < Object.keys(this.distance).length; i++) {
      if (!this.unvisited[Object.keys(this.distance)[i]]) {
        if (
          this.distance[Object.keys(this.distance)[i]] <=
          this.distance[Object.keys(this.distance)[min]]
        ) {
          min = Object.keys(this.distance)[i];
        }
      }
    }
    this.unvisited[min] = true;
    this.findDistance(min, target);
  }

  getAdjacent(source) {
    let result = [];
    if (source != undefined) {
      for (let i = 0; i < source.length; i++) {
        if (source[i] != -1) {
          if (!this.unvisited[i]) {
            result.push(i);
          }
        }
      }
    }
    return result;
  }
}

function shortestPathDijkstraArray(graph, start, target) {
  let DjikstraApp = new Djikstra(graph, start);
  DjikstraApp.findDistance(start, target);

  return DjikstraApp.distance[target] != undefined
    ? DjikstraApp.distance[target]
    : -1;
}

let test = new Djikstra(
  [
    [-1, 1, 2, -1],
    [1, -1, -1, 3],
    [2, -1, -1, -1],
    [-1, 3, -1, -1],
  ],
  0
);
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1],
    ],
    0,
    2
  )
); // Expected Output: 4

// Testcase 2
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1],
    ],
    0,
    4
  )
); // Expected Output: 6

// Testcase 3
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1],
    ],
    1,
    3
  )
); // Expected Output: 1

// Testcase 4
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 2, -1, -1, -1],
      [2, -1, 1, -1, 3],
      [-1, 1, -1, 4, -1],
      [-1, -1, 4, -1, 2],
      [-1, 3, -1, 2, -1],
    ],
    0,
    4
  )
); // Expected Output: 5

// Testcase 5
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 1, 2, -1],
      [1, -1, -1, 3],
      [2, -1, -1, -1],
      [-1, 3, -1, -1],
    ],
    0,
    3
  )
); // Expected Output: 4
