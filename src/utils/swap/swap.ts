/**
 * Swap two elements in an array in place.
 * Array mutation.
 * @param a - array
 * @param i - first index to swap
 * @param j - second index to swap
 */
export function swapInPlace<T>(a: T[], i: number, j: number): T[] {
    if (i < 0 || j < 0) throw new Error(`cannot swap indices i: ${i}, j: ${j}`);
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    return a;
}
