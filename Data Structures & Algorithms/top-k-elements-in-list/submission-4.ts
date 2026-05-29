class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map()

        nums.forEach((num) => {
            const count = map.get(num)
            map.set(num, count ? count + 1 : 1)
        })

        const sortedNums = Array.from(map).sort((a, b) => b[1] - a[1])

        const result = []

        for (let i = 0; i < k; i++) {
            result.push(sortedNums[i][0])
        }
        
        return result
    }
}
