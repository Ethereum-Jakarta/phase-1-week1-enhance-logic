const graph = {
  Nina: ["Chloe", "Alicia", "Eva"],
  Eva: ["Nina", "Alicia"],
  Alicia: ["Nina", "Eva", "Valerie"],
  Valerie: ["Alicia", "Chloe"],
  Chloe: ["Nina", "Valerie"],
};

function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);

    graph[node].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    });
  }
}
bfs(graph, "Nina")
