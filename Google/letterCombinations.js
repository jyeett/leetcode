// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if (digits === '') {
        return []
    }
    
    const combs = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }
    
    if (digits.length === 1) {
        return combs[digits]
    }
    let str = ''
    let dig = 0
    let arr = []
    function addLetters(num, str) {
        if (str.length === digits.length) {
            arr.push(str)
            return
        }
        for (let i = 0; i < combs[digits[num]].length; i++) {
            addLetters(num + 1, str + combs[digits[num]][i])
        }
    }
    addLetters(dig, str)
    return arr
};