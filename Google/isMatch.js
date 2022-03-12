// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// With errors, dp solution available

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    if (p === '.*') {
        return true
    }
    // if (p.length > s.length && p[p.length - 1] !== '*') {
    //     return false
    // }
    let sIndex = 0
    for (let i = 0; i < p.length; i++) {
        if (sIndex === s.length && (p[i + 1] !== '*')) {
            return false
        }
        if (p[i + 1] === '*') {
            while (s[sIndex + 1] === s[sIndex]) {
                sIndex++
            }
            sIndex++
            i++
        }
        if (p[i] === s[sIndex] || p[i] === '.') {
            sIndex++
        }
    }
    console.log(sIndex)
    if (sIndex < s.length) {
        return false
    }
    return true
};