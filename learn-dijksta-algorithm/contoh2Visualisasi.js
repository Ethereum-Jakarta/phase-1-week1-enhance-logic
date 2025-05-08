function dijkstra(graph, startNode) {
  let queue = [];
  let shortestDistances = {};
  let visited = new Set();

  for (const node in graph) {
    shortestDistances[node] = node === startNode ? 0 : Infinity;
    queue.push({ node, shortestDistances: shortestDistances[node] });
  }

  while (queue.length > 0) {
    queue.sort((a, b) => a.shortestDistances - b.shortestDistances);
    const { node } = queue.shift();

    if (visited.has(node)) {
      continue;
    }

    visited.add(node);

    for (const neighbor in graph[node]) {
      const tempDistance = shortestDistances[node] + graph[node][neighbor];
      if (tempDistance < shortestDistances[neighbor]) {
        shortestDistances[neighbor] = tempDistance;
        queue.push({ node: neighbor, shortestDistances: tempDistance });
      }
    }
  }
  return shortestDistances;
}

//! test!!!!!!
const graph = {
  A: { B: 5, D: 3 },
  B: { A: 5, C: 2, D: 3, E: 1 },
  C: { B: 2, F: 8 },
  D: { A: 3, B: 3, E: 3 },
  E: { B: 1, D: 3, F: 8 },
  F: { C: 8, E: 8 },
};
const graph2 = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 8 },
  D: { B: 3, C: 8 },
};

console.log(dijkstra(graph, "A"));
console.log(dijkstra(graph2, "A"));
