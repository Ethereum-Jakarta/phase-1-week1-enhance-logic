function shortestPath(friends, start, target) {
    //code
    const visited = new Set();
    const queue = [];

    if (start === target) return 0;
    queue.push([start, 0]);

    while (queue.length > 0) {
        const [currentNode, currentDistance] = queue.shift();
        // console.log('Node sekarang:')
        // console.log(currentNode);
        if (currentNode === target) return currentDistance;

        visited.add(currentNode);
        // console.log('orang ini memiliki teman:')
        // console.log(friends[currentNode])
        for (const teman of friends[currentNode]) {
            // console.log(teman);
            if (!visited.has(teman)) {
                queue.push([teman, currentDistance + 1]);
                visited.add(teman);
            }

        }
    }
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