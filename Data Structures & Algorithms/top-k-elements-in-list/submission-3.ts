class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let prevIndex = 0
        const sortedNums = []
        nums.sort((a, b) => a - b)
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                sortedNums.push([i - prevIndex, nums[i - 1]])
                prevIndex = i
            }
        }

        sortedNums.push([nums.length - prevIndex, nums.at(-1)])

        sortedNums.sort((a, b) => b[0] - a[0])

        const result = []
        console.log(sortedNums)
        for (let i = 0; i < k; i++) {
            result.push(sortedNums[i][1])
        }
        
        return result
    }
}
