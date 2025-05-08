function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1);
  return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const sorted = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  return [...sorted, ...left.slice(i), ...right.slice(j)];
}

console.log("Iterative Fibonacci (8):", fibs(8));
console.log("Recursive Fibonacci (8):", fibsRec(8));

console.log(
  "Merge Sort [3, 2, 1, 13, 8, 5, 0, 1]:",
  mergeSort([3, 2, 1, 13, 8, 5, 0, 1])
);
console.log("Merge Sort [105, 79, 100, 110]:", mergeSort([105, 79, 100, 110]));
