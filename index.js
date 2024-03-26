var threeSum = function(nums) {
    let i,left,right,sum,r=[];
        nums.sort(function(a,b){return a-b;});
    for(i = 0; i <nums.length-2;i++ ){
    if(i>0 &&nums[i] == nums[i-1]) continue;
    left = i+1;
    right = nums.length-1;
    while(left<right){
    sum=nums[i]+nums[left]+nums[right];
    if(sum==0){
    r.push([nums[i], nums[left], nums[right]]);
    while(nums[left]===nums[left+1]) left++
    while(nums[right]===nums[right+1]) right--
     left++;
     right--;
    }else if(sum>0){
    right--;
    }else{
    left++;
    }
    }
    }
    return r;
    };
