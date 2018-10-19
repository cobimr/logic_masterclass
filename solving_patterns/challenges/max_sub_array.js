const {
    log
} = console;

/* 
    Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

    Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

    You solution MUST have the following complexities:

    Time: O(N)
    Space: O(N)

*/

// Sample Input:
log(maxSubArray([100, 200, 300, 400], 2)) // 700
log(maxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39
log(maxSubArray([-3, 4, 0, -2, 6, -1], 2)) // 5
log(maxSubArray([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5
log(maxSubArray([2, 3], 3)) // null


function maxSubArray(arr, num) {
    // Check if the array is greater than the passed number
    if(arr.length < num) return null;
    // variables iniciales
    let maxSum = 0;
    let tempSum = 0;
    // Obtener suma maxima inicial
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    // suma temporal es la suma maxima inicial
    tempSum = maxSum;

    // loop iniando desde el index 'num'. Por que ya esta tomada la suma maxima inicial, empezar
    // a contar desde ahi!
    for ( let i = num; i < arr.length; i++) {
        // log('before',tempSum)
        tempSum = tempSum - arr[i - num] + arr[i];
        // log('after',tempSum)
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}