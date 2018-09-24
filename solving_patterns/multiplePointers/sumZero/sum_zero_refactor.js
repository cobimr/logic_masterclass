const { log } = console;

// Sum Zero
/* Write a function called sumZero wich accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist */


log( sumZero([-3, -2, -1, 0, 1, 2, 3]) )  // [-3, 3]
log( sumZero([-6, -5, 1, 0, -1, 3, 2]) )  // [-3, 3]
log( sumZero([-2, 0, 1, 3]) ) // undefined
log( sumZero([1, 2, 3]) ) // undefined

// Time Complexity - O(n)
// Space Complexity - O(1)

function sumZero(arr) {
    // Order arreglo de forma ascendente
    arr.sort((a, b) => a-b);
    // Variable que tomara el primer index del arreglo
    let left = 0;
    // Variable que tomara el ultimo index del arreglo
    let right = arr.length - 1;

    // Mientras el primer index sea menor que el ultimo index
    while(left < right) {
        // Variable que contendra la suma del primer index con el ultimo index
        let sum = arr[left] + arr[right];
        // Verificar que la suma sea igual a 0
        if( sum === 0) {
            return [arr[left], arr[right]];
        // Si la suma es mayor que 0 entonces
        } else if (sum > 0) {
            right--; // Se le resta 1 punto al ultimo index
        } else {
            // Si la suma es < 0
            left++; // El primer index se le suma un punto para volver a empezar el loop y comparar.
        }
    }
}