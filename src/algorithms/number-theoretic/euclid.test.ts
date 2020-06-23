import {} from './';
import { euclid } from './euclid';

describe('euclid', () => {
    describe('basic use case', () => {
        test('returns gcd', () => {
            expect(euclid(12, 15)).toBe(3);
            expect(euclid(89, 34)).toBe(1);
        });
    });
});
