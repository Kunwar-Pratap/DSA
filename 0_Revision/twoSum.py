nums = [2, 7, 11, 15]

target = 9

def twoSum(nums, target):
    hashMap = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hashMap:
            return [hashMap[complement], i]
        hashMap[num] = i

print(twoSum(nums, target))