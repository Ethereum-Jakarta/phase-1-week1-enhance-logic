export function shortestPathDijkstraArray(graph, start, target) {


    const visited = new Set();
    const queue = [];
    const distances = {};


    // Inisialisasi jarak dari start ke semua simpul dengan tak terhingga
    for (let i = 0; i < graph.length; i++) {
        distances[i] = Infinity
    }

    distances[start] = 0;
    queue.push({node: start, distance: 0});


    /*---------------------*/


    // Loop Antrian
    while (queue.length > 0) {

        //Urutkan
        queue.sort((a, b) => a.distance - b.distance);

        //ekstrak node dari antrian
        const {
            node: currentNode,
            distance: currentDistance
        } = queue.shift();

        //skip loop jika sudah divisit, mark jika belum
        if (visited.has(currentNode)) {
            continue;
        }
        visited.add(currentNode);


        let index = 0;

        graph[currentNode].forEach(bobot => {

            const totalDistance = (bobot > -1) ?
                //tD set infinity jika tak berbobot
                currentDistance + bobot : Infinity;

            // Update jarak terpendek jika totalDistance lebih kecil dari jarak sebelumnya
            if (totalDistance < distances[index]) {
                distances[index] = totalDistance;
                queue.push({node: index, distance: totalDistance}); // Masukkan simpul tetangga ke priority queue
            }

            index++
        })

    }

    return distances[target] !== Infinity ? distances[target] : -1;
}
