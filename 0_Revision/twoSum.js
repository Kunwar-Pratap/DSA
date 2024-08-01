const nums = [2, 7, 11, 15];
const target = 9;


function twoSum(nums, target) {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (hashMap[complement] !== undefined) {
            return [hashMap[complement], i]
        }
        hashMap[nums[i]] = i;
    }
}

console.log(twoSum(nums, target));