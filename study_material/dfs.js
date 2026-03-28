const graph = {
  Nina: ['Chloe', 'Alicia', 'Eva'],
  Eva: ['Nina', 'Alicia'],
  Alicia: ['Nina', 'Eva', 'Valerie'],
  Valerie: ['Alicia', 'Chloe'],
  Chloe: ['Nina', 'Valerie']
};

function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);

  graph[start].forEach((neighbor) => {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  });
}
const visited = new Set();

visited.add("Nina");
visited.add("Chloe");
console.log(visited.has("Nina")); 
console.log(visited.has("Eva"));  
visited.add("Nina"); 
console.log(visited.size); 
