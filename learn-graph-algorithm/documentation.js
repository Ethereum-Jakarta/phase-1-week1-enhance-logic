// class Node hanya untuk membuat node dan berisi informasi edge
class Node {
  constructor(value) {
    // properti ada value (misal A, B, C, dst) dan edges (node2 lain yg terhubung)
    this.value = value;
    this.edges = [];
  }

  // method untuk menambah edge ke properti array edges
  addEdge(node) {
    this.edges.push(node);
  }

  // method untuk menghapus edge
  removeEdge(node) {
    // cari dulu node nya ada di index ke berapa
    const index = this.edges.indexOf(node);
    // kalau nggak ada di array edges, hasil indexOf adalah -1
    if (index !== -1) {
      // kalau ada di array edges, hapus edge dari array edges
      this.edges.splice(index, 1);
    }
  }
}

//! end of Node

// class Graph untuk membuat graph nya, hanya 1 properti nodes dengan tipe data Map,
// dengan key nya adalah properti value dari class Node, dan value nya adalah class Node itu sendiri
class Graph {
  constructor() {
    this.nodes = new Map();
  }

  // method untuk menambah node di class graph, dimasukin ke Map nodes
  addNode(value) {
    // key: string dari value nya class Node, value: class Node dengan argument value
    this.nodes.set(value, new Node(value));
  }

  // method untuk menambahkan edge yang menghubungkan 2 node (source, destination)
  addEdge(source, destination) {
    // jika argumen source dan destination tidak ada di Map nodes, throw error
    if (!this.nodes.has(source) || !this.nodes.has(destination)) {
      throw new Error("Source or destination node does not exist.");
    }
    // jika kedua argumen ada di Map nodes, ambil node nya, masukin ke variabel
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);
    // sourceNode berisi class dgn value source, lalu aktifkan method addEdge dgn argumen destination,
    // jadi destination masuk ke array edges nya si object sourceNode
    sourceNode.addEdge(destinationNode);
  }

  // method untuk menghapus node, baik node di map nodes, maupun node di array edges di object nya class Node
  removeNode(value) {
    // bikin var untuk node yg mau dihapus
    const nodeToRemove = this.nodes.get(value);
    // kalau gk ada di map nodes, return kosongan. kalau ternyata ada,
    if (!nodeToRemove) return;

    // hapus node yg ada di array edges di tiap object class nya Node,
    // dgn cara loop map nodes, ambil value nya
    for (const node of this.nodes.values()) {
      // di tiap object Node, panggil method removeEdge()
      node.removeEdge(nodeToRemove);
    }

    // hapus juga node yg ada di map nodes
    this.nodes.delete(value);
  }

  // method ini untuk menghapus edge (hapus 2 node yg tersambung)
  removeEdge(source, destination) {
    // masukkan object Node ke variabel
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);
    // kalau salah satu nya gk ada, return kosongan. kalau ada,
    if (!sourceNode || !destinationNode) {
      return;
    }
    // object Node source memanggil method removeEdge object node destinationNode
    sourceNode.removeEdge(destination);
  }

  // Breadth-First Search
  // algo pencarian graph dengan mencari dulu di layer paling awal (queue stack)
  bfs(start, end) {
    let queue = []; // antrian queue stack, urut search dulu dari layer setelah startNode, dst
    let visited = new Set(); // node yg udah dikunjungi taruh di sini
    queue.push(this.nodes.get(start)); // untuk awal2 proses, masukkan dulu star ke queue untuk dicek

    // selama ada elemen di queue, loop terus
    while (queue.length > 0) {
      // ambil satu-persatu dari array queue secara urut dari awal (queue stack)
      let currentNode = queue.shift();
      // currentNode.value : current node tipe class, ambil properti value nya, sandingkan dengan value end
      if (currentNode.value === end) {
        return true;
      }

      // kalau tidak sama, masukkan yg udah dicek ke set visited
      visited.add(currentNode);

      // loop for edges nya object currentNode
      for (const edge of currentNode.edges) {
        // kalau belum pernah dicek (belum ada di visited), push ke queue utk antri cek
        if (!visited.has(edge)) {
          // edge sendiri tipe nya adalah salah satu elemen dari Map nodes
          queue.push(edge);
        }
      }
    }
    return false;
  }

  // Depth-First Search
  // algo buat nyari target, tapi nyarinya ke dalem dulu sampai habis,
  // kalau tidak ada baru naik ke layer sebelumnya, cari cabang, cek ke dalam lagi. loop sampai ketemu
  dfs(start, end, visited = new Set()) {
    // cek, kalau startNode / currentNode kalau udah di dalam rekursif ternyata ada di visited,
    // maka stop buat menghentikan rekursi
    if (visited.has(start)) {
      return false;
    }

    // masukkan ke set visited
    visited.add(start);

    // kalau startNode / currentNode(rekursif) adalah end, maka ketemu, dan return true
    if (start === end) {
      return true;
    }

    // kalau gk ada semua, lanjut pencarian ke layer berikutnya,
    // yaitu edges nya startNode / currentNode(rekursif)
    const startNode = this.nodes.get(start); // ambil dulu object Node
    for (const edge of startNode.edges) {
      // loop in edges nya startNode / currentNode(rekursif), reskursif in satu persatu
      // rekursif terus, cari Node sampai ke dalam (deep)
      if (this.dfs(edge.value, end, visited)) {
        // kalau nemu, true, naik ke layer atas true terus
        return true;
      }
    }
    // kalau bener2 gk ada, false, return ke layer atasnya false terus,
    // sampai false semua di tiap edges Node, dan bener2 false di layer paling atasnya
    return false;
  }
}

//! end of Graph

// Membuat graph dan menambahkan simpul serta sisi
const myGraph = new Graph();

myGraph.addNode("A");
myGraph.addNode("B");
myGraph.addNode("C");
myGraph.addNode("D");

myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C");
myGraph.addEdge("C", "A");
myGraph.addEdge("C", "D");

console.log("Graph awal:");
console.log(myGraph);

// Menghapus simpul 'B' dan sisi antara 'C' dan 'D'
myGraph.removeNode("B");
myGraph.removeEdge("C", "D");

console.log("Setelah penghapusan simpul dan sisi:");
console.log(myGraph);
console.log(myGraph.nodes.get("C"));

// Pencarian jarak terpendek menggunakan BFS dari 'A' ke 'D'
const bfsResult = myGraph.bfs("A", "D");
console.log("Pencarian jarak terpendek menggunakan BFS:", bfsResult);

// Pencarian jarak terpendek menggunakan DFS dari 'A' ke 'D'
const dfsResult = myGraph.dfs("C", "D");
console.log("Pencarian jarak terpendek menggunakan DFS:", dfsResult);
