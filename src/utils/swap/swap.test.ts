import { swapInPlace } from './';

describe('swapInPlace', () => {
    describe('basic use case', () => {
        test('swaps two elements', () => {
            const a = ['abc', 'def'];
            const result = swapInPlace(a, 0, 1);
            expect(result).toBe(a);
            expect(result.length).toBe(a.length);
            expect(result[0]).toBe('def');
            expect(result[1]).toBe('abc');
        });
    });
    describe('other cases', () => {
        test('does nothing if swap indices are the same', () => {
            const a = ['abc', 'def'];
            const result = swapInPlace(a, 0, 0);
            expect(result).toBe(a);
            expect(result.length).toBe(a.length);
            expect(result[0]).toBe('abc');
            expect(result[1]).toBe('def');
        });
        
        test('will swap undefined indices', () => {
            const a = ['abc', 'def'];
            const result = swapInPlace(a, 0, 2);
            expect(result).toBe(a);
            expect(result.length).toBe(3);
            expect(result[0]).toBe(undefined);
            expect(result[1]).toBe('def');
            expect(result[2]).toBe('abc');
        });

        test('negative indicies throw', () => {
            const a = ['abc', 'def'];
            expect(() => swapInPlace(a, -1, 0)).toThrow();
            expect(() => swapInPlace(a, 1, -1)).toThrow();
        });
    });
});
