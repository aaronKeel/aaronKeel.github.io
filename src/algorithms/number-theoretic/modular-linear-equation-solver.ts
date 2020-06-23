import { extendedEuclid } from './extended-euclid';

/**
 * Solve ax === b mod n
 * @param a 
 * @param b 
 * @param n 
 */
export function mles(a: number, b: number, n: number): number[] {
    const solutions = [];
    const [d, xp] = extendedEuclid(a, n);
    if (b % d === 0) {
        const xt = (xp * (b / d)) % n;
        const x0 = xt > -1 ? xt : xt + n;
        for (let i = 0; i < d; i++) {
            solutions.push((x0 + i * (n / d)) % n);
        }
    }
    return solutions;
}
