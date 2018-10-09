const {
    log
} = console;

/*
    Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
*/

// Sample Input:
log(averagePair([1, 2, 3], 2.5)) // true
log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
log(averagePair([], 4)) // false


function averagePair(arr, target) {
    // Valida que exista valores en el arreglo
    if (arr.length === 0) return false;

    // Order arreglo de forma ascendente
    arr.sort((a, b) => a - b);

    // Variable que tomara el primer index del arreglo
    let left = 0;

    // Variable que tomara el ultimo index del arreglo
    let right = arr.length - 1;

    // Mientras el primer index sea menor que el ultimo index
    while(left < right) {
        // Variable que contendra la suma del primer index con el ultimo index
        let avg = ( arr[left] + arr[right] ) / 2;

        // Verificar que la suma sea igual a average
        if( avg === target) {
            return true;
        // Si el avg es menor que el target
        } else if (avg < target) {
            // Adelantar un indice del inicio del arreglo ( al ser un arreglo ordenado, el indice seria de mayor valor entonces la suma daria un avg mas alto )
            left++;
        } else {
            // Si el avg es mayor que el target, entonces retrasar un indice del final de arreglo para obtener un avg de menor denominacion
            right--; 
        }
    }

    // Si no se consigio el avg del loop, entonces retornar falso
    return false
}