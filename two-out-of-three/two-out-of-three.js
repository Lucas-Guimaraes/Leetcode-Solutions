/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    nums1Uniq = nums1.filter(onlyUnique)
    nums2Uniq = nums2.filter(onlyUnique)
    nums3Uniq = nums3.filter(onlyUnique)
    filter1 = nums1Uniq.filter((x) => nums2.includes(x))
    filter2 = nums2Uniq.filter((x) => nums3.includes(x))
    filter3 = nums3Uniq.filter((x) => nums1.includes(x))
    twoofthree = filter1.concat(filter2, filter3)
    return twoofthree.filter(onlyUnique)
};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}