/**
 * Compute the gcd of a and b.
 * @param a - positive integer
 * @param b - positive integer
 */
export function euclid(a: number, b: number): number {
    if (a !== Math.floor(a) || b !== Math.floor(b) || a < 0 || b < 0) {
        return NaN;
    }
    if (b === 0) {
        return a;
    }
    return euclid(b, a % b);
}
