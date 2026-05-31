class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkChar(char: number): boolean {
        if (char >= 48 && char <= 57) return true
        if (char >= 97 && char <= 122) return true

        return false
    }


    isPalindrome(s: string): boolean {
        s = s.toLowerCase()

        for (let i = 0, j = s.length - 1; i <= j;) {
            const firstChar = s[i].charCodeAt(0)
            const isCheckFirst = this.checkChar(firstChar)
    
            if (!isCheckFirst) i++

            const lastChar = s[j].charCodeAt(0)
            const isCheckLast = this.checkChar(lastChar)

            if (!isCheckLast) j--

            if (!isCheckFirst || !isCheckLast) continue

            if (firstChar !== lastChar) return false
            i++
            j--
        }

        return true
    }
}
