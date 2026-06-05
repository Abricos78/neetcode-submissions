class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        if (nums.length <= 3) {
            return nums.indexOf(target)
        }
        let start = 0
        let end = nums.length - 1
        let middle = Math.floor(end / 2) + 1
        let findReverseIndex = null

        while (middle > start) {
            if (nums[middle] > nums[middle + 1]) {
                findReverseIndex = middle + 1
                break
            }
            if (nums[middle] < nums[middle - 1]) {
                findReverseIndex = middle
                break
            }

            if (nums[middle] > nums[end]) {
                start = middle
            } else {
                end = middle
            }

            middle = Math.floor((end - start) / 2) + start
        }

        if (findReverseIndex === null) {
            if (nums[start] > target || nums[end] < target) return -1
            start = 0
            end = nums.length - 1
        } else {
            if (nums[findReverseIndex] === target) return findReverseIndex
    
            if (nums[findReverseIndex] > target || nums[findReverseIndex - 1] < target) return -1

            if (nums[findReverseIndex] < target && nums.at(-1) > target) {
                start = findReverseIndex
                end = nums.length - 1
            } else {
                start = 0
                end = findReverseIndex - 1
            }
        }

        middle = Math.floor((end - start) / 2) + start

        if (nums[start] === target) return start
        if (nums[end] === target) return end

        while (middle > start) {
            if (nums[middle] === target) return middle
            if (nums[middle] > target) {
                end = middle
            } else {
                start = middle
            }
            middle = Math.floor((end - start) / 2) + start
        }
        return -1
    }
}
