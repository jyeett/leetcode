// Given a list of non-negative integers nums, arrange them such that they form the largest
// number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// sorting O(n log(n))

/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    let checkZero = 0
    for (let [i, num] of Object.entries(nums)) {
        checkZero += num
        nums[i] = num.toString()
    }
    if (checkZero === 0) {
        return "0"
    }
    function compare(n1, n2) {
        if (n1 + n2 > n2 + n1) {
            return -1
        }
        return 1
    }
    nums = nums.sort(compare)
    return nums.join("")
};