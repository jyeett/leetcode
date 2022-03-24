// The next greater element of some element x in an array is the first greater
// element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where
// nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j]
// and determine the next greater element of nums2[j] in nums2. If there is no next
// greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater
// element as described above.

// stack time O(n + m), space O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    // value to index map
    let obj = {}
    for (let i = 0; i < nums1.length; i++) {
        obj[nums1[i]] = i
    }
    let resArr = Array(nums1.length).fill(-1)
    let stack = []
    for (let i = 0; i < nums2.length; i++) {
        let curr = nums2[i]
        while (stack.length > 0 && curr > stack[stack.length - 1]) {
            let val = stack.pop()
            let index = obj[val]
            resArr[index] = curr
        }
        if (obj.hasOwnProperty(curr)) {
            stack.push(curr)
        }
    }
    return resArr
};