class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map()

        for (let i = 0; i < strs.length; i++) {
            const sortedKey = strs[i].split('').sort().join()

            if (map.has(sortedKey)) {
                map.get(sortedKey).push(strs[i])
            } else {
                map.set(sortedKey, [strs[i]])
            }
        }

        const result = []

        for (const [_, value] of map) {
            result.push(value)
        }

        return result
    }
}
