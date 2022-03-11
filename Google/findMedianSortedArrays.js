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