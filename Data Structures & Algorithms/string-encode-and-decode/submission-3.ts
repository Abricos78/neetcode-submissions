class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = ''

        strs.forEach((str) => {
            result += str + '/n'
        })
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (!str) return []

        const res = str.split('/n')

        res.length -= 1

        return res
    }
}
