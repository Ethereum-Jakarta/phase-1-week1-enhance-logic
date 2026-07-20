class PriorityQueue {
  public elements: { element: string; priority: number }[];

  constructor() {
    this.elements = [];
  }

  enqueue(element: string, priority: number) {
    this.elements.push({ element, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.elements.shift()!.element;
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

function dijkstra(
  graph: Record<string, Record<string, number>>,
  start: string,
  end: string,
) {
  const distances: Record<string, number> = {};
  const previous: Record<string, string | null> = {};
  const pq = new PriorityQueue();

  for (const vtx in graph) {
    if (vtx == start) {
      distances[vtx] = 0;
      pq.enqueue(vtx, 0);
    } else {
      distances[vtx] = Infinity;
      pq.enqueue(vtx, Infinity);
    }
    previous[vtx] = null;
  }

  if (!Object.keys(distances).find((d) => d == end)) {
    throw new Error("Target not valid sir");
  }

  while (!pq.isEmpty()) {
    const curr = pq.dequeue();

    if (curr == end) {
      return { distances, previous };
    }

    for (const neighbor in graph[curr]) {
      const distance = distances[curr] + graph[curr][neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = curr;
        pq.enqueue(neighbor, distance);
      }
    }
  }
}

function getPath(
  previous: Record<string, string | null>,
  start: string,
  end: string,
) {
  const path = [];
  let current = end;

  while (current !== null) {
    path.unshift(current);
    current = previous[current]!;
  }

  return path;
}

// Definisi graf
let graph: Record<string, Record<string, number>> = {
  JKT: { BDG: 150, SMG: 450, MDN: 1800 },
  SBY: { SMG: 350, YOG: 300, MKS: 900 },
  BDG: { JKT: 150, YOG: 400 },
  YOG: { BDG: 400, SBY: 300, SMG: 130 },
  SMG: { JKT: 450, SBY: 350, YOG: 130 },
  MDN: { JKT: 1800, MKS: 2500 },
  MKS: { SBY: 900, MDN: 2500 },
};

function solveQuestions() {
  // TESTCASE 1. Jakarta ke Surabaya
  let { distances, previous } = dijkstra(graph, "JKT", "SBY")!;
  let path = getPath(previous, "JKT", "SBY");
  console.log(
    "1. Jalur terpendek Jakarta ke Surabaya:",
    path.join(" -> "),
    "dengan jarak",
    distances["SBY"],
    "km",
  );
  // Expected return: Jalur terpendek Jakarta ke Surabaya: JKT -> SMG -> SBY dengan jarak 800 km

  // TESTCASE 2. Medan ke Yogyakarta
  ({ distances, previous } = dijkstra(graph, "MDN", "YOG")!);
  path = getPath(previous, "MDN", "YOG");
  console.log(
    "2. Jalur terpendek Medan ke Yogyakarta:",
    path.join(" -> "),
    "dengan jarak",
    distances["YOG"],
    "km",
  );
  // Expected return: Jalur terpendek Medan ke Yogyakarta: MDN -> JKT -> BDG -> YOG dengan jarak 2350 km

  // TESTCASE 3. Bandung ke Makassar
  ({ distances, previous } = dijkstra(graph, "BDG", "MKS")!);
  path = getPath(previous, "BDG", "MKS");
  console.log(
    "3. Jalur terpendek Bandung ke Makassar:",
    path.join(" -> "),
    "dengan jarak",
    distances["MKS"],
    "km",
  );
  // Expected return: Jalur terpendek Bandung ke Makassar: BDG -> YOG -> SBY -> MKS dengan jarak 1600 km

  // TESTCASE 4. Menambahkan jalan baru Jakarta ke Yogyakarta dengan jarak 450KM
  graph["JKT"]["YOG"] = 450;
  graph["YOG"]["JKT"] = 450;
  ({ distances, previous } = dijkstra(graph, "JKT", "SBY")!);
  path = getPath(previous, "JKT", "SBY");
  console.log(
    "4. Setelah penambahan jalan baru, jalur terpendek Jakarta ke Surabaya:",
    path.join(" -> "),
    "dengan jarak",
    distances["SBY"],
    "km",
  );
  // Expected return: Setelah penambahan jalan baru, jalur terpendek Jakarta ke Surabaya: JKT -> YOG -> SBY dengan jarak 750 km
}

solveQuestions();

console.table(graph);
