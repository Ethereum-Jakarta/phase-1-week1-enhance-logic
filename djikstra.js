function shortestPathDijkstraArray(graph, start, target) {
    // code
    const distances = {}; // Menyimpan jarak terpendek dari start ke setiap simpul
    const visited = new Set(); // Menandai simpul yang sudah dikunjungi
    const priorityQueue = []; 
    const INF = Number.MAX_SAFE_INTEGER; // Jarak tak terhingga untuk inisialisasi

    // Inisialisasi jarak dari start ke semua simpul dengan tak terhingga

    for(let i = 0; i < graph.length; i++ ){
        distances[i] = INF
    }

    distances[start] = 0; // Jarak dari start ke start adalah 0;
    priorityQueue.push([start, 0]); // Masukkan simpul start ke priority queue dengan jarak 0

    //Loop hingga priority queue kosong
    while (priorityQueue.length > 0) {
        priorityQueue.sort((a,b) => a[1] - b[1]) // Urutkan berdasarkan jarak terpendek
        const [currentNode, currentDistance] = priorityQueue.shift(); // Ambil simpul dengan jarak terpendek dari priority queue

        if(visited.has(currentNode)) {
            continue; //Lewati jika simpul sudah dikunjungi sebelumnya
        }

        visited.add(currentNode); //Tandai simpul sebagai dikunjungi

        //Iterasi melalui tetangga dari simpul saat ini
        let index = 0;
        for(const weight of graph[currentNode]){
            if(weight === -1){
                index ++
                continue;
            }
            const totalDistance = currentDistance + weight; //Update jarak terpendek jika totalDistance lebih kecil dari jarak sebelumnya
            if(totalDistance < distances[index]){
                distances[index] = totalDistance;
                priorityQueue.push([index, totalDistance]); //Masukkan simpul tetangga ke priority queue
            }
            index++
        }
    }
    return distances[target] !== INF ? distances[target] : -1;
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