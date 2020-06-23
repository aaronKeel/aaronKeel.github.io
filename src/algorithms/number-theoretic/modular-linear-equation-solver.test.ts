import { mles } from './';

describe('mles', () => {
    describe('basic use case', () => {
        test('returns solutions', () => {
            expect(mles(35, 10, 50)).toEqual([6, 16, 26, 36, 46]);
            expect(mles(14, 30, 100)).toEqual([95, 45]);
        });
    });
});
