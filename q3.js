/* 
💡 **Q3.** Given a sorted array of distinct integers and a target value, 
return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2

*/

function foo(arr,target){
    let start =0;
    let end =arr.length;
    while (start <= end) {
        let mid =Math.floor((end+start)/2);

        if(arr[mid]==target){
            return mid;
        }else if(arr[mid]>target){
            end =mid-1
        }else{
            start =mid+1;
        }
    }
    return start;
}
nums = [1,3,5,6,7,8,9,10,12,25,56];
 target =11;
 let ans =foo(nums,target);

 console.log(ans)