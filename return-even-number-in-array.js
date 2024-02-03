function EvenArray(nums)
{
    let sum=0;
    let a=[];
    for (let index = 0; index < nums.length; index++) {
        
        if(nums[index]%2===0)
        {
            a.push(nums[index]);
        }
        
        
    }
    return a;
}

const num=[2,4,9,8];
const result=EvenArray(num);
console.log(result);