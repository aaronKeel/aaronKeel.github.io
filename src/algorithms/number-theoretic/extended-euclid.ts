/**
 * Compute solution to d = ax + by
 * @param a - positive integer
 * @param b - positive integer
 */
export function extendedEuclid(a: number, b: number): number[] {
    if (b === 0) {
        return [a, 1, 0];
    }
    const [dp, xp, yp] = extendedEuclid(b, a % b);
    return [dp, yp, xp - Math.floor(a / b) * yp];
}
