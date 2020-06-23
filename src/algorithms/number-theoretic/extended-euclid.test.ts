import { extendedEuclid } from './extended-euclid';

describe('extendedEuclid', () => {
    describe('basic use case', () => {
        test('returns solution', () => {
            expect(extendedEuclid(99, 78)).toEqual([3, -11, 14]);
            expect(extendedEuclid(15, 6)).toEqual([3, 1, -2]);
        });
    });
});
