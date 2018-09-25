const { log } = console;

/*
Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
*/


log(search([1, 2, 3, 4, 5, 6], 4)); // 3
log(search([1, 2, 3, 4, 5, 6], 6)); // 5
log(search([1, 2, 3, 4, 5, 6], 11)); // -1

// Time Complexity - O(n)

function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}