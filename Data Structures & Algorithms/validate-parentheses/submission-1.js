class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    charsMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    isValid(s) {
        const stack = []

        for (let i = 0; i < s.length; i++) {
            const char = s[i]

            switch (char) {
                case '(':
                case '[':
                case '{':
                    stack.push(char)
                    break;
                default:
                    const openChar = stack.pop()
                    if (!openChar) return false

                    if (this.charsMap[openChar] !== char) return false
            }
        }

        if (stack.length) return false

        return true
    }
}
