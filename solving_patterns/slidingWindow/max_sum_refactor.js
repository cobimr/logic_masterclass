const { log } = console;

/*
Write a function called maxSubarraySum wich accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array
*/


log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
log(maxSubarraySum([4, 2, 1, 6], 1)); //6
log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
log(maxSubarraySum([], 4)); // null

// Time Complexity - O(N)

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    
    if( arr.length < num ) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for ( let i = num; i < arr.length; i++) {
        log('before',tempSum)
        tempSum = tempSum - arr[i - num] + arr[i];
        log('after',tempSum)
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}