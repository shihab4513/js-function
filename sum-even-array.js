function sumOfEvenArray(nums)
{
    let sum=0;
    for (let index = 0; index < nums.length; index++) {
        
        if(nums[index]%2===0)
        {
            sum+=nums[index];
        }
        
        
    }
    return sum;
}

const num=[2,4,9,8];
const result=sumOfEvenArray(num);
console.log(result);