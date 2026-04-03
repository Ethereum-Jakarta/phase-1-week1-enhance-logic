export default function (arr, target) {
    const n = arr.length;
    let step = Math.sqrt(n);
    let prev = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.sqrt(n);
        if (prev >= n) {
            return -1;
        }
    }

    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) {
            return -1;
        }
    }

    if (arr[prev] === target) {
        return prev; // Mengembalikan indeks elemen yang ditemukan
    }

    return -1; // Mengembalikan -1 jika elemen tidak ditemukan
}
