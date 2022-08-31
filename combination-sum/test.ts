import combinationSum from './index';

describe('combinationSum', () => {
    it('candidates = [2,3,6,7], target = 7', () => {
        expect(combinationSum([2,3,6,7], 7)).toStrictEqual([[2,2,3],[7]]);
    });
});
