function combinationSum(candidates: number[], target: number): number[][] {
    const result = [];

    const backtrack = (sum: number, index: number, current: number[]) => {
        if (sum === 0) {
            result.push(current);
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            if (sum - candidates[i] >= 0) {
                backtrack(sum - candidates[i], i, [...current, candidates[i]]);
            }
        }
    }

    backtrack(target, 0, []);

    return result;
}

export default combinationSum;
