const { log } = console;

/* 
    Write a function called sameFrequency.
    Given two positive integers, find out if the two numbers have the same frequency of digits.

    You solution MUST have the following complexities:

    Time: O(N)

*/

// Sample Input:
log(sameFrequency(182, 821)) // true
log(sameFrequency(34, 14)) // false
log(sameFrequency(3589578, 5879385)) // true
log(sameFrequency(22, 222)) // false


function sameFrequency(num1, num2) {
    // Convertir numeros en String
    let number1 = num1.toString()
    let number2 = num2.toString()

    // Verificar que los numeros tengan la misma longitud
    if (number1.length !== number2.length) return false;

    // Create un objeto para hacer la comparacion de valores
    let frequencyObj = {}

    // Loop entre el primer numero
    for (let i = 0; i < number1.length; i++) {
        // Obtenemos el numero por cada iteracion
        let num = number1[i];
        // Si el numero existe, incrementar, si no igualar a 1
        frequencyObj[num] ?
            frequencyObj[num] += 1 :
            frequencyObj[num] = 1
    }
    // Loop entre el segundo numero
    for (let i = 0; i < number2.length; i++) {
        // Obtenemos el numero por cada iteracion
        let num = number2[i];
        // Si no existe el numero dentro del objeto que contiene los valores del primer numero, entonces no tiene la misma frecuencia
        if (!frequencyObj[num]) {
            return false;
        } else {
            frequencyObj[num] -= 1;
        }
    }

    return true;
}