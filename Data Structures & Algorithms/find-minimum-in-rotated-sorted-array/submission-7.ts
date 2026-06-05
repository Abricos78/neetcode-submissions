class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        if(nums.length < 3) {
            return Math.min(...nums)
        }

        let start = 0
        let end = nums.length - 1
        let middle = Math.floor(end / 2)
    
        if (nums[start] > nums[middle] || nums[middle] > nums[end]) {
            while(middle > start) {
                if (nums[middle] < nums[middle - 1]) return nums[middle]
                if (nums[middle] > nums[middle + 1]) return nums[middle + 1]

                if (nums[middle] < nums[start]) {
                    end = middle
                } else {
                    start = middle
                }

                middle = Math.floor((end - start) / 2) + start
            }
        }

        return nums[0]
    }
}
