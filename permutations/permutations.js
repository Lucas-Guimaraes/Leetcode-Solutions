/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    if (nums.length === 1) {return [nums]}
    if (nums.length === 2) {return [nums, [nums[1], nums[0]]]}
    
    fin = []
    if (nums.length === 3)
    {
        for (let i = 0; i < nums.length; i++)
        {
            s1 = i === 1 ? 0 : 1
            s2 = i === 2 ? 0 : 2
            fin.push([nums[i], nums[s1], nums[s2]])
            fin.push([nums[i], nums[s2], nums[s1]])
        }
        
    }
    
    
    if (nums.length === 4) {
        for (let i = 0; i < nums.length; i++)
        {
            s1 = i === 1 ? 0 : 1
            s2 = i === 2 ? 0 : 2
            s3 = i === 3 ? 0 : 3
            
            fin.push([nums[i], nums[s1], nums[s2], nums[s3]],
                     [nums[i], nums[s1], nums[s3], nums[s2]],
                     [nums[i], nums[s2], nums[s1], nums[s3]],
                     [nums[i], nums[s2], nums[s3], nums[s1]],
                     [nums[i], nums[s3], nums[s1], nums[s2]],
                     [nums[i], nums[s3], nums[s2], nums[s1]])
        }
    }
    
    if (nums.length === 5) {
        for (let i=0; i < nums.length; i++)
        {
            
            s1 = i === 1 ? 0 : 1
            s2 = i === 2 ? 0 : 2
            s3 = i === 3 ? 0 : 3
            s4 = i === 4 ? 0 : 4
            
            fin.push([nums[i], nums[s1], nums[s2], nums[s3], nums[s4]])
            fin.push([nums[i], nums[s1], nums[s2], nums[s4], nums[s3]])
            fin.push([nums[i], nums[s1], nums[s3], nums[s2], nums[s4]])
            fin.push([nums[i], nums[s1], nums[s3], nums[s4], nums[s2]])
            fin.push([nums[i], nums[s1], nums[s4], nums[s2], nums[s3]])
            fin.push([nums[i], nums[s1], nums[s4], nums[s3], nums[s2]])
            
            fin.push([nums[i], nums[s2], nums[s1], nums[s3], nums[s4]])
            fin.push([nums[i], nums[s2], nums[s1], nums[s4], nums[s3]])
            fin.push([nums[i], nums[s2], nums[s3], nums[s1], nums[s4]])
            fin.push([nums[i], nums[s2], nums[s3], nums[s4], nums[s1]])
            fin.push([nums[i], nums[s2], nums[s4], nums[s1], nums[s3]])
            fin.push([nums[i], nums[s2], nums[s4], nums[s3], nums[s1]])
            
            fin.push([nums[i], nums[s3], nums[s2], nums[s1], nums[s4]])
            fin.push([nums[i], nums[s3], nums[s2], nums[s4], nums[s1]])
            fin.push([nums[i], nums[s3], nums[s1], nums[s2], nums[s4]])
            fin.push([nums[i], nums[s3], nums[s1], nums[s4], nums[s2]])
            fin.push([nums[i], nums[s3], nums[s4], nums[s2], nums[s1]])
            fin.push([nums[i], nums[s3], nums[s4], nums[s1], nums[s2]])
            
            fin.push([nums[i], nums[s4], nums[s2], nums[s1], nums[s3]])
            fin.push([nums[i], nums[s4], nums[s2], nums[s3], nums[s1]])
            fin.push([nums[i], nums[s4], nums[s1], nums[s2], nums[s3]])
            fin.push([nums[i], nums[s4], nums[s1], nums[s3], nums[s2]])
            fin.push([nums[i], nums[s4], nums[s3], nums[s2], nums[s1]])
            fin.push([nums[i], nums[s4], nums[s3], nums[s1], nums[s2]])
        }
    }
    
    if (nums.length === 6) {
        for (let i=0; i < nums.length; i++)
        {
            
            s1 = i === 1 ? 0 : 1
            s2 = i === 2 ? 0 : 2
            s3 = i === 3 ? 0 : 3
            s4 = i === 4 ? 0 : 4
            s5 = i === 5 ? 0 : 5
            
            
            fin.push([nums[i], nums[s1], nums[s2], nums[s3], nums[s4], nums[s5]])
            fin.push([nums[i], nums[s1], nums[s2], nums[s3], nums[s5], nums[s4]])
            fin.push([nums[i], nums[s1], nums[s2], nums[s4], nums[s3], nums[s5]])
            fin.push([nums[i], nums[s1], nums[s2], nums[s4], nums[s5], nums[s3]])
            fin.push([nums[i], nums[s1], nums[s2], nums[s5], nums[s3], nums[s4]])
            fin.push([nums[i], nums[s1], nums[s2], nums[s5], nums[s4], nums[s3]])

            fin.push([nums[i], nums[s1], nums[s3], nums[s2], nums[s4], nums[s5]])
            fin.push([nums[i], nums[s1], nums[s3], nums[s2], nums[s5], nums[s4]])
            fin.push([nums[i], nums[s1], nums[s3], nums[s4], nums[s2], nums[s5]])
            fin.push([nums[i], nums[s1], nums[s3], nums[s4], nums[s5], nums[s2]])
            fin.push([nums[i], nums[s1], nums[s3], nums[s5], nums[s2], nums[s4]])
            fin.push([nums[i], nums[s1], nums[s3], nums[s5], nums[s4], nums[s2]])

            fin.push([nums[i], nums[s1], nums[s4], nums[s3], nums[s2], nums[s5]])
            fin.push([nums[i], nums[s1], nums[s4], nums[s3], nums[s5], nums[s2]])
            fin.push([nums[i], nums[s1], nums[s4], nums[s2], nums[s3], nums[s5]])
            fin.push([nums[i], nums[s1], nums[s4], nums[s2], nums[s5], nums[s3]])
            fin.push([nums[i], nums[s1], nums[s4], nums[s5], nums[s3], nums[s2]])
            fin.push([nums[i], nums[s1], nums[s4], nums[s5], nums[s2], nums[s3]])

            fin.push([nums[i], nums[s1], nums[s5], nums[s3], nums[s4], nums[s2]])
            fin.push([nums[i], nums[s1], nums[s5], nums[s3], nums[s2], nums[s4]])
            fin.push([nums[i], nums[s1], nums[s5], nums[s4], nums[s3], nums[s2]])
            fin.push([nums[i], nums[s1], nums[s5], nums[s4], nums[s2], nums[s3]])
            fin.push([nums[i], nums[s1], nums[s5], nums[s2], nums[s3], nums[s4]])
            fin.push([nums[i], nums[s1], nums[s5], nums[s2], nums[s4], nums[s3]])

            fin.push([nums[i], nums[s2], nums[s1], nums[s3], nums[s4], nums[s5]])
            fin.push([nums[i], nums[s2], nums[s1], nums[s3], nums[s5], nums[s4]])
            fin.push([nums[i], nums[s2], nums[s1], nums[s4], nums[s3], nums[s5]])
            fin.push([nums[i], nums[s2], nums[s1], nums[s4], nums[s5], nums[s3]])
            fin.push([nums[i], nums[s2], nums[s1], nums[s5], nums[s3], nums[s4]])
            fin.push([nums[i], nums[s2], nums[s1], nums[s5], nums[s4], nums[s3]])

            fin.push([nums[i], nums[s2], nums[s3], nums[s1], nums[s4], nums[s5]])
            fin.push([nums[i], nums[s2], nums[s3], nums[s1], nums[s5], nums[s4]])
            fin.push([nums[i], nums[s2], nums[s3], nums[s4], nums[s1], nums[s5]])
            fin.push([nums[i], nums[s2], nums[s3], nums[s4], nums[s5], nums[s1]])
            fin.push([nums[i], nums[s2], nums[s3], nums[s5], nums[s1], nums[s4]])
            fin.push([nums[i], nums[s2], nums[s3], nums[s5], nums[s4], nums[s1]])

            fin.push([nums[i], nums[s2], nums[s4], nums[s3], nums[s1], nums[s5]])
            fin.push([nums[i], nums[s2], nums[s4], nums[s3], nums[s5], nums[s1]])
            fin.push([nums[i], nums[s2], nums[s4], nums[s1], nums[s3], nums[s5]])
            fin.push([nums[i], nums[s2], nums[s4], nums[s1], nums[s5], nums[s3]])
            fin.push([nums[i], nums[s2], nums[s4], nums[s5], nums[s3], nums[s1]])
            fin.push([nums[i], nums[s2], nums[s4], nums[s5], nums[s1], nums[s3]])

            fin.push([nums[i], nums[s2], nums[s5], nums[s3], nums[s4], nums[s1]])
            fin.push([nums[i], nums[s2], nums[s5], nums[s3], nums[s1], nums[s4]])
            fin.push([nums[i], nums[s2], nums[s5], nums[s4], nums[s3], nums[s1]])
            fin.push([nums[i], nums[s2], nums[s5], nums[s4], nums[s1], nums[s3]])
            fin.push([nums[i], nums[s2], nums[s5], nums[s1], nums[s3], nums[s4]])
            fin.push([nums[i], nums[s2], nums[s5], nums[s1], nums[s4], nums[s3]])

            fin.push([nums[i], nums[s3], nums[s2], nums[s1], nums[s4], nums[s5]])
            fin.push([nums[i], nums[s3], nums[s2], nums[s1], nums[s5], nums[s4]])
            fin.push([nums[i], nums[s3], nums[s2], nums[s4], nums[s1], nums[s5]])
            fin.push([nums[i], nums[s3], nums[s2], nums[s4], nums[s5], nums[s1]])
            fin.push([nums[i], nums[s3], nums[s2], nums[s5], nums[s1], nums[s4]])
            fin.push([nums[i], nums[s3], nums[s2], nums[s5], nums[s4], nums[s1]])

            fin.push([nums[i], nums[s3], nums[s1], nums[s2], nums[s4], nums[s5]])
            fin.push([nums[i], nums[s3], nums[s1], nums[s2], nums[s5], nums[s4]])
            fin.push([nums[i], nums[s3], nums[s1], nums[s4], nums[s2], nums[s5]])
            fin.push([nums[i], nums[s3], nums[s1], nums[s4], nums[s5], nums[s2]])
            fin.push([nums[i], nums[s3], nums[s1], nums[s5], nums[s2], nums[s4]])
            fin.push([nums[i], nums[s3], nums[s1], nums[s5], nums[s4], nums[s2]])

            fin.push([nums[i], nums[s3], nums[s4], nums[s1], nums[s2], nums[s5]])
            fin.push([nums[i], nums[s3], nums[s4], nums[s1], nums[s5], nums[s2]])
            fin.push([nums[i], nums[s3], nums[s4], nums[s2], nums[s1], nums[s5]])
            fin.push([nums[i], nums[s3], nums[s4], nums[s2], nums[s5], nums[s1]])
            fin.push([nums[i], nums[s3], nums[s4], nums[s5], nums[s1], nums[s2]])
            fin.push([nums[i], nums[s3], nums[s4], nums[s5], nums[s2], nums[s1]])

            fin.push([nums[i], nums[s3], nums[s5], nums[s1], nums[s4], nums[s2]])
            fin.push([nums[i], nums[s3], nums[s5], nums[s1], nums[s2], nums[s4]])
            fin.push([nums[i], nums[s3], nums[s5], nums[s4], nums[s1], nums[s2]])
            fin.push([nums[i], nums[s3], nums[s5], nums[s4], nums[s2], nums[s1]])
            fin.push([nums[i], nums[s3], nums[s5], nums[s2], nums[s1], nums[s4]])
            fin.push([nums[i], nums[s3], nums[s5], nums[s2], nums[s4], nums[s1]])

            fin.push([nums[i], nums[s4], nums[s2], nums[s3], nums[s1], nums[s5]])
            fin.push([nums[i], nums[s4], nums[s2], nums[s3], nums[s5], nums[s1]])
            fin.push([nums[i], nums[s4], nums[s2], nums[s1], nums[s3], nums[s5]])
            fin.push([nums[i], nums[s4], nums[s2], nums[s1], nums[s5], nums[s3]])
            fin.push([nums[i], nums[s4], nums[s2], nums[s5], nums[s3], nums[s1]])
            fin.push([nums[i], nums[s4], nums[s2], nums[s5], nums[s1], nums[s3]])

            fin.push([nums[i], nums[s4], nums[s3], nums[s2], nums[s1], nums[s5]])
            fin.push([nums[i], nums[s4], nums[s3], nums[s2], nums[s5], nums[s1]])
            fin.push([nums[i], nums[s4], nums[s3], nums[s1], nums[s2], nums[s5]])
            fin.push([nums[i], nums[s4], nums[s3], nums[s1], nums[s5], nums[s2]])
            fin.push([nums[i], nums[s4], nums[s3], nums[s5], nums[s2], nums[s1]])
            fin.push([nums[i], nums[s4], nums[s3], nums[s5], nums[s1], nums[s2]])

            fin.push([nums[i], nums[s4], nums[s1], nums[s3], nums[s2], nums[s5]])
            fin.push([nums[i], nums[s4], nums[s1], nums[s3], nums[s5], nums[s2]])
            fin.push([nums[i], nums[s4], nums[s1], nums[s2], nums[s3], nums[s5]])
            fin.push([nums[i], nums[s4], nums[s1], nums[s2], nums[s5], nums[s3]])
            fin.push([nums[i], nums[s4], nums[s1], nums[s5], nums[s3], nums[s2]])
            fin.push([nums[i], nums[s4], nums[s1], nums[s5], nums[s2], nums[s3]])

            fin.push([nums[i], nums[s4], nums[s5], nums[s3], nums[s1], nums[s2]])
            fin.push([nums[i], nums[s4], nums[s5], nums[s3], nums[s2], nums[s1]])
            fin.push([nums[i], nums[s4], nums[s5], nums[s1], nums[s3], nums[s2]])
            fin.push([nums[i], nums[s4], nums[s5], nums[s1], nums[s2], nums[s3]])
            fin.push([nums[i], nums[s4], nums[s5], nums[s2], nums[s3], nums[s1]])
            fin.push([nums[i], nums[s4], nums[s5], nums[s2], nums[s1], nums[s3]])

            fin.push([nums[i], nums[s5], nums[s2], nums[s3], nums[s4], nums[s1]])
            fin.push([nums[i], nums[s5], nums[s2], nums[s3], nums[s1], nums[s4]])
            fin.push([nums[i], nums[s5], nums[s2], nums[s4], nums[s3], nums[s1]])
            fin.push([nums[i], nums[s5], nums[s2], nums[s4], nums[s1], nums[s3]])
            fin.push([nums[i], nums[s5], nums[s2], nums[s1], nums[s3], nums[s4]])
            fin.push([nums[i], nums[s5], nums[s2], nums[s1], nums[s4], nums[s3]])

            fin.push([nums[i], nums[s5], nums[s3], nums[s2], nums[s4], nums[s1]])
            fin.push([nums[i], nums[s5], nums[s3], nums[s2], nums[s1], nums[s4]])
            fin.push([nums[i], nums[s5], nums[s3], nums[s4], nums[s2], nums[s1]])
            fin.push([nums[i], nums[s5], nums[s3], nums[s4], nums[s1], nums[s2]])
            fin.push([nums[i], nums[s5], nums[s3], nums[s1], nums[s2], nums[s4]])
            fin.push([nums[i], nums[s5], nums[s3], nums[s1], nums[s4], nums[s2]])

            fin.push([nums[i], nums[s5], nums[s4], nums[s3], nums[s2], nums[s1]])
            fin.push([nums[i], nums[s5], nums[s4], nums[s3], nums[s1], nums[s2]])
            fin.push([nums[i], nums[s5], nums[s4], nums[s2], nums[s3], nums[s1]])
            fin.push([nums[i], nums[s5], nums[s4], nums[s2], nums[s1], nums[s3]])
            fin.push([nums[i], nums[s5], nums[s4], nums[s1], nums[s3], nums[s2]])
            fin.push([nums[i], nums[s5], nums[s4], nums[s1], nums[s2], nums[s3]])

            fin.push([nums[i], nums[s5], nums[s1], nums[s3], nums[s4], nums[s2]])
            fin.push([nums[i], nums[s5], nums[s1], nums[s3], nums[s2], nums[s4]])
            fin.push([nums[i], nums[s5], nums[s1], nums[s4], nums[s3], nums[s2]])
            fin.push([nums[i], nums[s5], nums[s1], nums[s4], nums[s2], nums[s3]])
            fin.push([nums[i], nums[s5], nums[s1], nums[s2], nums[s3], nums[s4]])
            fin.push([nums[i], nums[s5], nums[s1], nums[s2], nums[s4], nums[s3]])


            
        }
    }
    
    return fin
};