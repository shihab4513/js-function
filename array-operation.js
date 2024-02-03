function sumOfArray(nums)
{
    let sum=0;
    for (let index = 0; index < nums.length; index++) {
        sum+=nums[index];
        
    }
    return sum;
}

const num=[2,4,9,8];
const result=sumOfArray(num);
console.log(result);