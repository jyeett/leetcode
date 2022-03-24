// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Time log(min(n, m)), running binary search on smaller of two arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let a = nums1
    let b = nums2
    let total = a.length + b.length
    let half = Math.floor(total / 2)
    
    if (a.length > b.length) {
        a = nums2
        b = nums1
    }
    let l = 0
    let r = a.length - 1
    
    while (true) {
        let aPoint = Math.floor((l + r) / 2)
        let bPoint = half - aPoint - 2
        
        let aLeft = aPoint >= 0 ? a[aPoint] : Number.NEGATIVE_INFINITY
        let aRight = aPoint + 1 < a.length ? a[aPoint + 1] : Number.POSITIVE_INFINITY
        let bLeft = bPoint >= 0 ? b[bPoint] : Number.NEGATIVE_INFINITY
        let bRight = bPoint + 1 < b.length ? b[bPoint + 1] : Number.POSITIVE_INFINITY
        
        if (aLeft <= bRight && bLeft <= aRight) {
            if (total % 2) {
                return Math.min(aRight, bRight)
            }
            return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
        } else if (aLeft > bRight) {
            r = aPoint - 1
        } else {
            l = aPoint + 1
        }
    }
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2)
    merged.sort((a,b) => a-b)
    
    let half = merged[Math.ceil(merged.length / 2) - 1]
    let halfplus = merged[Math.ceil(merged.length / 2)]
    
    if (merged.length % 2 !== 0) {
        return half
    }
    return (half + halfplus) / 2
};