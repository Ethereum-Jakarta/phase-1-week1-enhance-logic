const graph = {
    'JKT': { 'BDG': 150, 'SMG': 450, 'MDN': 1800 },
    'SBY': { 'SMG': 350, 'YOG': 300, 'MKS': 900 },
    'BDG': { 'JKT': 150, 'YOG': 400 },
    'YOG': { 'BDG': 400, 'SBY': 300, 'SMG': 130 },
    'SMG': { 'JKT': 450, 'SBY': 350, 'YOG': 130 },
    'MDN': { 'JKT': 1800, 'MKS': 2500 },
    'MKS': { 'SBY': 900, 'MDN': 2500 }
};

class PriorityQueue {
    constructor() {
        this.elements = [];
    }
    enqueue(element, priority) {
        this.elements.push({ element, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }
    dequeue() {
        return this.elements.shift().element;
    }
    isEmpty() {
        return this.elements.length === 0;
    }
}

function dijkstra(graph, start, end) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();


    for (let vertex in graph) {
        distances[vertex] = Infinity; 
        previous[vertex] = null;
    }
    distances[start] = 0; 
    pq.enqueue(start, 0); 

    while (!pq.isEmpty()) {
        const currentVertex = pq.dequeue(); 
        if (currentVertex === end) {
            break;
        }

        for (let neighbor in graph[currentVertex]) {
            const distance = graph[currentVertex][neighbor];
            const newDistance = distances[currentVertex] + distance;

            
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                previous[neighbor] = currentVertex;
                pq.enqueue(neighbor, newDistance); 
            }
        }
    }

    return { distances, previous };
}

function getPath(previous, start, end) {
    const path = [];
    let current = end;

    while (current) {
        path.unshift(current); 
        current = previous[current]; 
    }

   return path[0] === start ? path : [];
}

function solveQuestions() {
    let { distances, previous } = dijkstra(graph, 'JKT', 'SBY');
    let path = getPath(previous, 'JKT', 'SBY');
    console.log('1. Jalur terpendek Jakarta ke Surabaya:', path.join(' -> '), 'dengan jarak', distances['SBY'], 'km');
   ({ distances, previous } = dijkstra(graph, 'MDN', 'YOG'));
    path = getPath(previous, 'MDN', 'YOG');
    console.log('2. Jalur terpendek Medan ke Yogyakarta:', path.join(' -> '), 'dengan jarak', distances['YOG'], 'km');
      ({ distances, previous } = dijkstra(graph, 'BDG', 'MKS'));
       path = getPath(previous, 'BDG', 'MKS');
       console.log('3. Jalur terpendek Bandung ke Makassar:', path.join(' -> '), 'dengan jarak', distances['MKS'], 'km');
  
      graph['JKT']['YOG'] = 500; 
       graph['YOG']['JKT'] = 500; 
       ({ distances, previous } = dijkstra(graph, 'JKT', 'SBY'));
       path = getPath(previous, 'JKT', 'SBY');
       console.log('4. Setelah penambahan jalan baru, jalur terpendek Jakarta ke Surabaya:', path.join(' -> '), 'dengan jarak', distances['SBY'], 'km');

       console.table(graph);
   }
   
   // Menjalankan solusi
   solveQuestions();