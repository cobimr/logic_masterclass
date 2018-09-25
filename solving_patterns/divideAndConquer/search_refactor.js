const { log } = console;

/*
Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
*/


log(search([1, 2, 3, 4, 5, 6], 4)); // 3
log(search([1, 2, 3, 4, 5, 6], 6)); // 5
log(search([1, 2, 3, 4, 5, 6], 11)); // -1

// Time Complexity - Log(N)

function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (currentElement < val) {
            min = middle + 1;
        }
        else if (currentElement > val) {
            max = middle - 1;
        }
        else {
            return middle
        }
    }
    return -1;
}