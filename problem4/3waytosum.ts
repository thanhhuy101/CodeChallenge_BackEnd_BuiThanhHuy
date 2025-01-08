// Implementation 1: Iterative Approach
function sum_to_n_iterative(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Implementation 2: Mathematical Formula (Gauss's Formula)
function sum_to_n_mathematical(n: number): number {
  return (n * (n + 1)) / 2;
}

// Implementation 3: Recursive Approach
function sum_to_n_recursive(n: number): number {
  // Base case
  if (n <= 1) {
    return n;
  }
  // Recursive case
  return n + sum_to_n_recursive(n - 1);
}

// Resutlt
console.log("Implement 1: ", sum_to_n_iterative(5)); // 15
console.log("Implement 2: ", sum_to_n_mathematical(5)); // 15
console.log("Implement 3: ", sum_to_n_recursive(5)); // 15
