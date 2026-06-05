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
        let end = Math.floor((nums.length - 1) / 2) + 1
        let middle = Math.floor(end / 2)
    
        if (nums[start] > nums[middle] || nums[middle] > nums[end]) {
            while(middle > start) {
                if (nums[middle] < nums[middle - 1]) return nums[middle]
                if (nums[middle] > nums[middle + 1]) return nums[middle + 1]

                if (nums[middle] < nums[start]) {
                    end = middle
                    middle = Math.floor((end - start) / 2) + start
                } else {
                    start = middle
                    middle = Math.floor((end - start) / 2) + start
                }
            }
        }

        start = Math.floor((nums.length - 1) / 2)
        end = nums.length - 1
        middle = Math.floor((end - start) / 2) + start
        
        console.log('EndINdex: ', start, middle, end)
        console.log('ValuesINdex: ', nums[start], nums[middle], nums[end])

        if (nums[start] > nums[middle] || nums[middle] > nums[end]) {
            console.log('hello')
            while(middle < end) {
                if (nums[middle] < nums[middle - 1]) return nums[middle]
                if (nums[middle] > nums[middle + 1]) return nums[middle + 1]

                if (nums[middle] > nums[end]) {
                    start = middle
                    middle = Math.floor((end - start) / 2) + start
                } else {
                    end = middle
                    middle = Math.floor((end - start) / 2) + start
                }
            }
        }

        return nums[0]
    }
}
