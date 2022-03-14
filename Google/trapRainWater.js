// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

// 2 pointer solution O(n) time, O(1) space

/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let l = 0, r = height.length - 1
    let leftmax = 0, rightmax = 0
    let totalVol = 0
    while (l < r) {
        if (height[l] <= height[r]) {
            if (height[l] >= leftmax) {
                leftmax = height[l]
            } else {
                totalVol += leftmax - height[l]
            }
            l++
        } else {
            if (height[r] >= rightmax) {
                rightmax = height[r]
            } else {
                totalVol += rightmax - height[r]
            }
            r--
        }
    }
    return totalVol
};