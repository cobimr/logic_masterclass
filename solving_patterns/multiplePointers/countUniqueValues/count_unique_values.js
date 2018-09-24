const { log } = console;

// Count Unique Values
/* Implement a function called countUniqueValues wich accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted */


log(countUniqueValues([1, 1, 1, 1, 1, 2]) )  // 2
log(countUniqueValues([1, 2, 3, 4, 4, 4 ,4, 7, 7, 12, 12, 13]) ) // 7
log(countUniqueValues([]) ) // 0
log(countUniqueValues([-2, -1, -1, 0, 1]) ) // 4

// Time Complexity - O(n)
// Space Complexity - O(n)

function countUniqueValues(arr) {
    // Si la longitud del array es 0, no hay valores unicos 0.
    if (arr.length === 0) return 0;

    // Order arreglo de forma ascendente
    arr.sort((a, b) => a-b);

    // Unique Values Variable
    let uniqueVal = 0;
    for (let i = 0; i < arr.length; i++){
        // Si el valor del index[i] no es igual al mismo indice - 1, entonces existe un valor unico
        if (arr[i] !== arr[i-1]){
            uniqueVal++;
        }
    }
    return uniqueVal;
}