class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let zeroCount = 0
        let productAll = nums.reduce((acc, num) => {
            if (num === 0) {
                zeroCount++
                return acc
            }
            return acc *= num
        })

        if (zeroCount > 1) {
            return nums.map(() => 0)
        }

        if (zeroCount) {
            return nums.reduce((acc, num) => {
                if (num !== 0) acc.push(0)
                else acc.push(productAll)

                return acc
            }, [])
        }

        return nums.reduce((acc, num) => {
            acc.push(productAll / num)
            return acc
        }, [])
    }
}
