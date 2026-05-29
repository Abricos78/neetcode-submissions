class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map()

        for (let i = 0; i < nums.length; i++) {
            const firstIndex = map.get(nums[i])
            if (firstIndex !== undefined) {
                return [firstIndex, i]
            }

            map.set(target - nums[i], i)
        }
    }
}
