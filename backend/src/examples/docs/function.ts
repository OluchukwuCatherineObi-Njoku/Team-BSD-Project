/**
 * Calculates the nth Fibonacci number.
 * The Fibonacci sequence is a series of numbers where each number is the sum
 * of the two preceding ones, usually starting with 0 and 1. The sequence starts as 0, 1, 1, 2, 3, 5, 8, ...
 *
 * @param {number} n - The position in the Fibonacci sequence (zero-based).
 * @returns {number} The nth Fibonacci number.
 * @throws {Error} Throws an error if the input is less than 0 or not an integer.
 * @example
 * // returns 5
 * fibonacci(5); // The sequence is 0, 1, 1, 2, 3, 5, so the 5th number is 5
 * @example
 * // returns 1
 * fibonacci(2); // The sequence is 0, 1, 1, and the 2nd number is 1
 */
function fibonacci(n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error('Input must be a non-negative integer');
  }

  let a = 0;
  let b = 1;

  if (n === 0) {
    return a;
  }
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

export default fibonacci;
