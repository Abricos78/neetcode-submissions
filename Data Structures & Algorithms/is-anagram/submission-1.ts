class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false
        const sMap = new Map()

        for (let i = 0; i < s.length; i++) {
            const current = sMap.get(s[i]) || 1
            if (sMap.has(s[i])) {
                sMap.set(s[i], current + 1)
            } else {
                sMap.set(s[i], current)
            }
        }

        for (let i = 0; i < t.length; i++) {
            const current = sMap.get(t[i])
            if (!current) return false

            sMap.set(t[i], current - 1)
        }

        return true
    }
}
