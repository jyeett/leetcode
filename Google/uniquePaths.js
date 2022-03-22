// There is a robot on an m x n grid. The robot is initially located at the top-left corner
// (i.e., grid[0][0]). The robot tries to move to the bottom-right corner
// (i.e., grid[m - 1][n - 1]).
// The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the
// robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// DP solution time O(n*m), space O(n)

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let row = Array(n).fill(1)
    
    for (let i = 0; i < m-1; i++) {
        let newRow = Array(n).fill(1)
        for (let j = n-2; j >= 0; j--) {
            newRow[j] = newRow[j+1]+row[j]
        }
        // console.log(newRow)
        row = newRow
    }
    return row[0]
};