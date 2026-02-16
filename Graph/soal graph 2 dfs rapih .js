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
        this.visit = [];
    }
    getNodeFromValue(value){
        for(let i=0; i<this.nodes.length;i++){
          
            if(value == this.nodes[i].value){
                return this.nodes[i]
            }
        }
        return false;
    }

    getNodeValue(value){
        for(let i=0; i<this.nodes.length;i++){
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


dfs(startValue,targetValue, visited = new Set()) {
   
    //ambil nodes berdasarkan value yang diberikan startvalue
    let startNode = this.nodes.find((e)=>{
        let valueToFind = startValue.value[0];
        let valueElement = e.value[0];
        if(valueElement == valueToFind){
            return valueElement
        }
        
    })

    //cek apakah sudah di kunjungi
    if (visited.visit.find((e)=>{ if(e==startNode.value){
        return true //jika belum dikunjungi kembalikan tru untuk melanjutkan dfs
    }})){
        return false; // Jika simpul sudah dikunjungi, kembalikan false untuk kembali ke simpul (node) sebelumnya
    }

    if (startValue.value[1] === targetValue) {
        //jika target ditemukan pada rekursif ini maka kembalikan true supaya kembali ke simpul(node) sebelumnya
        return true // Jika target ditemukan, kembalikan true
    }
    
    visited.addVisit(startValue.value[0]); // Tandai simpul sebagai sudah dikunjungi
    for (const neighbor of startNode.edges) {
        
        if (this.dfs(neighbor,targetValue, visited)) { //jika true maka rekursif terus di lanjutkan masuk ke simpul (node) anak
            //scaning seluruh node
            if(visited.visit.find((e)=>{if(e === neighbor.value[0]) return true })){
                //untuk handling jika mencari satu value di dalam graph
            }else{

            }
        }
    }

    this.visit = visited.visit;
    return false; // Jika target tidak ditemukan
  }
}


function islandCount(grid) {
    // Implementasi DFS untuk menghitung jumlah pulau
    let maps = new Graph();
    let nodes = []
    //masukan seluruh node ke graph
    for (let i = 0; i < grid.length; i++) {
        let temp = []
        for (let j = 0; j < grid[i].length; j++) {
            let node = maps.addNode([`${i},${j}`,grid[i][j]])
            temp.push(node)
        }
        nodes.push(temp)
    }
    //masukan edges/tetangga pada graph
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j+1] != undefined){
                nodes[i][j].addEdge(nodes[i][j+1])
            }
            if(grid[i+1] != undefined){
                nodes[i][j].addEdge(nodes[i+1][j])
            }
        }
    }
    //looping seluruh nodes
    let island = [];
    let visitHistory = [];
    for (let i = 0; i < maps.nodes.length; i++) {
        //ambil pisahkan node dan node value
        const node = maps.nodes[i];
        const nodeValue = maps.nodes[i].value[0];
        
        //cek apakah node sudah dikunjungi
        if(visitHistory.find((e)=>{
            if(e == nodeValue){
                return true
            }
        })){
            //jika sudah dikunjungi maka lewati
            continue;
        }

        maps.dfs(node,0) //untuk mendapatkan visit/pengalaman kunjungan kemana saja
        
        //mendapatkan jejak kunjungan namun unik tidak ada yang sama
        let rememberNodeValue = [];
        for (let i = 0; i < maps.visit.length; i++) {
            const node = maps.visit[i];
            if(!rememberNodeValue.find((e)=>{
                if(node == e){
                    return true
                }
            })){
                rememberNodeValue.push(node)
            }

            //jika pada pengalaman kunjungan terakhir maka akan di lalukan push sebuah pualu
            if(i==maps.visit.length-1){
                island.push(rememberNodeValue);    
            }
        }
        //menghapus jejak visit pulau / pengalaman kunjungan pulau untuk membuat pengalaman baru
        maps.visit = []

        //untuk memasukan jejak visit pulau yang unik ke dalam pengalaman pengecekan untuk di lompati.
        for (let k = 0; k < rememberNodeValue.length; k++) {
            const valueVisit = rememberNodeValue[k];
            visitHistory.push(valueVisit)
        }
        
    }
    
    //mengembalikan jumlah pulau yang ditemukan
    return island.length
}
  
  // Testcase 1
  console.log(islandCount([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ])); // Expected Output: 1
  
//   // Testcase 2
  console.log(islandCount([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
  ])); // Expected Output: 3
  
  // Testcase 3
  console.log(islandCount([
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1]
  ])); // Expected Output: 5
  
  // Testcase 4
  console.log(islandCount([
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1]
  ])); // Expected Output: 4
  
  // Testcase 5
  console.log(islandCount([
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ])); // Expected Output: 6
  
  // Testcase 6
  console.log(islandCount([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0]
  ])); // Expected Output: 2
  
  // Testcase 7
  console.log(islandCount([
    [1, 1, 1],
    [0, 0, 0],
    [1, 0, 1]
  ])); // Expected Output: 3