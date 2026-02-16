class Node {
    constructor(value){
        this.value = value;
        this.edges = [];
    }
    addEdge(node2){
        this.edges.push(node2);
    }
}

class Set{
    constructor(){
        this.visit = []
    }
    add(node){
        this.visit.push(node);
    }

    has(node){
        this.visit.find((e)=>{
            if(e == node){
                return true
            }
            return false
        })
    }
}

class Graph{
    constructor(){
        this.nodes = [];
    }


    addNode(value){
        const newNode = new Node(value);
        this.nodes.push(newNode)
        return newNode
    }
    addEdge(node1,node2){
        node1.addEdge(node2);

        //jika tidak berarah
        //node2.addEdge(node1);
    }
}


function dijkstra(graph, startNode) {
    const distances = {}; // Menyimpan jarak terpendek dari startNode ke setiap simpul
    const visited = new Set(); // Menandai simpul-simpul yang sudah dikunjungi
    const queue = []; // Antrian prioritas untuk simpul-simpul yang akan dieksplorasi
  
    // Inisialisasi jarak awal dan antrian
    for (const node in graph) {
      distances[node] = node === startNode ? 0 : Infinity;
      queue.push({ node, distance: distances[node] });
    }
  
    // Looping utama
    while (queue.length > 0) {
      queue.sort((a, b) => a.distance - b.distance);
      const { node } = queue.shift();
  
      if (visited.has(node)) continue;
  
      visited.add(node);
  
      for (const neighbor in graph[node]) {
        const distance = distances[node] + graph[node][neighbor];
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          queue.push({ node: neighbor, distance });
        }
      }
    }
  
    return distances;
  }

  function shortestPathWeightedGraph(graph, start, target) {
    const INF = Number.MAX_SAFE_INTEGER; // Jarak tak terhingga untuk inisialisasi
    const distances = {}; // Menyimpan jarak terpendek dari start ke setiap simpul
    const visited = new Set(); // Menandai simpul yang sudah dikunjungi
    const priorityQueue = []; // Priority queue sederhana
  
    // Inisialisasi jarak dari start ke semua simpul dengan tak terhingga
    for (const node in graph) {
      distances[node] = INF;
    }
  
    distances[start] = 0; // Jarak dari start ke start adalah 0
    priorityQueue.push([start, 0]); // Masukkan simpul start ke priority queue dengan jarak 0
    

    // Loop hingga priority queue kosong
    while (priorityQueue.length > 0) {
      priorityQueue.sort((a, b) => a[1] - b[1]); // Urutkan berdasarkan jarak terpendek
      const [currentNode, currentDistance] = priorityQueue.shift(); // Ambil simpul dengan jarak terpendek dari priority queue
      if (visited.has(currentNode)) {
        continue; // Lewati jika simpul sudah dikunjungi sebelumnya
      }
  
      visited.add(currentNode); // Tandai simpul sebagai dikunjungi
  
      // Iterasi melalui tetangga dari simpul saat ini
      for (const { node: neighbor, weight } of graph[currentNode]) {
        //console.log(graph[currentNode]);
        const totalDistance = currentDistance + weight;
        // Update jarak terpendek jika totalDistance lebih kecil dari jarak sebelumnya
        if (totalDistance < distances[neighbor]) {
          distances[neighbor] = totalDistance;
          priorityQueue.push([neighbor, totalDistance]); // Masukkan simpul tetangga ke priority queue
        }
      }
    }
  
    // Kembalikan jarak terpendek dari start ke target, jika tidak ada jalur, kembalikan -1
    return distances[target] !== INF ? distances[target] : -1;
  }

  function shortestPathDijkstraArray(graph, start, target) {
    // code
    //create graph
    let myGraph = {};
    for (let i = 0; i < graph.length; i++) {
        let node = myGraph[i] = [];
    }
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            const element = graph[i][j];
            if(element != -1){
                myGraph[i].push({"node" : j, "weight" : element}) 
            }
        }
    }
    //console.log(myGraph)

    return shortestPathWeightedGraph(myGraph,start,target);
  }
  
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