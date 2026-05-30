class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0

        nums.sort((a, b) => a - b)

        let maxLength = 1
        let currentLength = 1

        for (let i = 1; i < nums.length; i++) {
            const diff = Math.abs(nums[i] - nums[i - 1])

            if (diff === 0) continue

            if (diff === 1) {
                currentLength++
            }

            if (diff > 1) {
                maxLength = maxLength > currentLength ? maxLength : currentLength
                currentLength = 1
            }
        }

        return currentLength > maxLength ? currentLength : maxLength
    }
}
