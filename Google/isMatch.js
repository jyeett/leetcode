// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// dp with cache, top-down memoization solution

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    let cache = {}
    
    dfs = (sIndex, pIndex) => {
        let key = [sIndex, pIndex]
        if (key in cache) {
            return cache[key]
        }
        if (sIndex >= s.length && pIndex >= p.length) {
            return true
        }
        if (pIndex >= p.length) {
            return false
        }
        let check = sIndex < s.length && (s[sIndex] == p[pIndex] || p[pIndex] == '.')
        if (pIndex+1 < p.length && p[pIndex+1] == '*') {
            cache[key] = dfs(sIndex, pIndex+2) || (check && dfs(sIndex+1, pIndex))
            return cache[key]
        }
        if (check) {
            cache[key] = dfs(sIndex+1, pIndex+1)
            return cache[key]
        }
        cache[key] = false
        return false
    }
    return dfs(0,0)
};

// dp without cache

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    dfs = (sIndex, pIndex) => {
        if (sIndex >= s.length && pIndex >= p.length) {
            return true
        }
        if (pIndex >= p.length) {
            return false
        }
        let check = sIndex < s.length && (s[sIndex] == p[pIndex] || p[pIndex] == '.')
        if (pIndex+1 < p.length && p[pIndex+1] == '*') {
            return dfs(sIndex, pIndex+2) || (check && dfs(sIndex+1, pIndex))
        }
        if (check) {
            return dfs(sIndex+1, pIndex+1)
        }
        return false
    }
    return dfs(0,0)
};