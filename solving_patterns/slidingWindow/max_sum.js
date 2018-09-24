const { log } = console;

log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
log(maxSubarraySum([4, 2, 1, 6], 1)); //6
log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
log(maxSubarraySum([], 4)); // null

function maxSubarraySum(arr, num) {
    if( num > arr.length ) {
        return null;
    }

    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}