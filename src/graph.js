import util from "util";

function logdbg(obj) {
    const logInspect = util.inspect(obj, {showHidden: false, depth: null, colors: true});
    console.log(logInspect)
}

export class Node {

    _value
    _edges = []

    constructor(value) {
        this._value = value;
        this._edges = [];
    }

    addEdge(node) {
        this._edges.push(node)
    }

    rmEdge(node) {
        const index = this._edges.indexOf(node);
        if (index !== -1) {
            this._edges.splice(index, 1);
        }
    }
}

export class Graph {

    _nodes = new Map();

    constructor() {
        this._nodes = new Map();
    }

    addNode(value) {
        this._nodes.set(value, new Node((value)))
        return value
    }

    addEdge(source, destination) {

        if (!this._nodes.has(source) || !this._nodes.has(destination)) {
            throw new Error("Source or destination nodes doesnt exist")
        }

        const sourceNode = this._nodes.get(source);
        const destNode = this._nodes.get(destination);

        sourceNode.addEdge(destNode)
    }

    rmNode(value) {
        const nodeWillRm = this._nodes.get(value);

        if (!nodeWillRm) return

        for (const node in this._nodes.values()) {
            node.rmEdge(nodeWillRm)
        }

        this._nodes.delete(value)
    }

    rmEdge(source, dest) {
        const sourceNode = this._nodes.get(source);
        const destNode = this._nodes.get(dest);

        if (!sourceNode || !destNode) {
            return
        }

        sourceNode.rmEdge(destNode)
    }

    // Depth-First Search
    dfs(startValue, targetValue, visited = new Set()) {
        if (visited.has(startValue)) return false;

        visited.add(startValue);
        if (startValue === targetValue) return true;

        const startNode = this._nodes.get(startValue);

        if (!startNode) return false

        for (const neighbor of startNode._edges) {
            if (this.dfs(neighbor.value, targetValue, visited)) {
                return true;
            }
        }

    }

    // Breadth-First Search
    bfs(startValue, targetValue) {
        const visited = new Set();
        const queue = [];
        queue.push(this._nodes.get(startValue));

        while (queue.length > 0) {
            const currentNode = queue.shift();
            if (currentNode._value === targetValue) return true;

            visited.add(currentNode);
            for (const neighbor of currentNode._edges) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }

        return false;
    }


}

export function

shortestPath(
    friends = {
        'Alice': ['Bob', 'Charlie'],
        'Bob': ['Alice', 'David', 'Eve'],
        'Charlie': ['Alice', 'Eve'],
        'David': ['Bob'],
        'Eve': ['Bob', 'Charlie']
    }, start = 'Alice', target = 'David') {

    //One Shoot
    if (start === target) {
        return 0
    }

    const visited = new Set();
    const queue = [start];

    let counter = 0;

    while (queue.length > 0) {

        //Pick queue and mark Visited
        const currentNode = queue.shift();
        visited.add(currentNode)

        counter++; //Visited trigger counter++

        //Loop edgeNode in node
        for (const edgeNode of friends[currentNode]) {

            if (!visited.has(edgeNode)) {

                //Mark Visited and Queueing
                visited.add(edgeNode)
                queue.push(edgeNode);

                if (edgeNode === target) return counter;
            }
        }
    }

    return counter
}

export function

islandCount(grid = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
]) {

    function safetyChecker2D(obj, y, x) {
        try {
            return grid[y][x]
        } catch (e) {
            return null
        }
    }

    let counter = 0;

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {

            //Jika ptr angka 1
            if (grid[y][x] === 1) {

                //Jika ptr kiri atas gaada satu
                if (
                    safetyChecker2D(grid, y, x - 1) !== 1 &&//Kiri
                    safetyChecker2D(grid, y - 1, x) !== 1 //Atas
                ) {
                    counter++
                }

            }
        }
    }

    return counter;


}