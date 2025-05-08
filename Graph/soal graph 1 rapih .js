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
    cekVisit(value){
        //let visited = false;
        for (let i = 0; i < this.visit.length; i++) {
            //console.log(this.visit[i],value)
            if(this.visit[i] == value){
                return true
            }
        }
        return false
    }
    
    addVisit(nodeValue){
        this.visit.push(nodeValue);
    }
    setVisit(nodesValue){
        this.visit = nodesValue;
    }
    getVisit(){
        return this.visit;
    }
    getValue(value){
        for (let i = 0; i < this.visit.length; i++) {
            const element = this.visit[i];
            if(element == value){
                return i
            }
            
        }
    }
}

class Graph{
    constructor(){
        this.nodes = [];
    }
    getNodeFromValue(value){
        for(let i=0; i<this.nodes.length;i++){
            //console.log(this.nodes[i].value,value,this.nodes)
            if(value == this.nodes[i].value){
                return this.nodes[i]
            }
        }
        return false;
    }

    getNodeValue(value){
        for(let i=0; i<this.nodes.length;i++){
            //console.log(this.nodes[i])
            if(value == this.nodes[i].value){
                return value
            }
        }
        return false;
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
    
    bfs(startValue,targetValue){
        if(!this.getNodeValue(startValue)){
            return -1
        }
        const visited = new Set();
        const queue = [];
        
        queue.push(startValue);
        
        visited.addVisit(startValue);
        //let BeforeCurrentNode;
        while(queue.length>0){
            const valueQueue = queue.shift();
            const currentNode = this.getNodeFromValue(valueQueue);
                       
            if(currentNode.value == targetValue){
                
                //return visited.getVisit()
            }
            

            //periksa semua simpul
            let neighbor = currentNode.edges
            for(let i = 0; i<neighbor.length; i++){
                if(!visited.cekVisit(neighbor[i].value)){ //kalau belum pernah dikunjungi
                    queue.push(neighbor[i].value);
                    visited.addVisit(neighbor[i].value);
                    if(neighbor[i].value == targetValue){
                        let index = visited.getValue(currentNode.value)
                        return index+1
                        
                    }
                }
            }
        }
        return 0;
    }

    dfs(startValue, targetValue, visited = new Set()) {
        let urutan = [];
        if (visited.getValue(startValue)){
            return false; // Jika simpul sudah dikunjungi, kembalikan false
        }
        urutan.push(startValue)
    
        visited.addVisit(startValue); // Tandai simpul sebagai sudah dikunjungi
        if (startValue === targetValue) {
            return true // Jika target ditemukan, kembalikan true
        }
    
        const startNode = this.getNodeFromValue(startValue);
        //console.log(startNode)
        //return
        for (const neighbor of startNode.edges) {
          if (this.dfs(neighbor.value, targetValue, visited)) {
            return true,visited; // Jika target ditemukan di tetangga, kembalikan true
          }
        }
    
        return false; // Jika target tidak ditemukan
      }
}


function shortestPath(friends, start, target) {
    //code

    //membuat obj graph
    let nodes = Object.keys(friends)
    let myGraph = new Graph();
    
    //memasukan node kedalam graph
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i]
        myGraph.addNode(node)
        // console.log(edges)
    }

    //menambahkan edges kedalam graph
    for (let i = 0; i < nodes.length; i++) {
        let node1 = myGraph.getNodeFromValue(nodes[i])
        let edges = friends[nodes[i]];
        for (let j = 0; j < edges.length; j++) {
            const neighbor= edges[j];
            let node2 = myGraph.getNodeFromValue(neighbor)
            myGraph.addEdge(node1,node2)
            
            
        };
    }
    
    return myGraph.bfs(start,target);
  }
    
  // Testcase 1
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'David')); // Expected Output: 2
    
    // Testcase 2
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'Eve')); // Expected Output: 2
    
    // Testcase 3
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'Alice')); // Expected Output: 0
    
    // Testcase 4
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'David', 'Charlie')); // Expected Output: 3
    
    // Testcase 5
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Eve', 'Bob')); // Expected Output: 1
    
    // Testcase 6
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Charlie', 'Alice')); // Expected Output: 1
    
    // Testcase 7
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'David', 'Eve')); // Expected Output: 2